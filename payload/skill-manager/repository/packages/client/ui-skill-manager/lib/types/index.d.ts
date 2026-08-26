/** Native Host half of Skill Settings, inspection, and personal import. */
import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Context } from '@deepseek-ai/cordis';
import type { ScopeKey } from '@deepseek-ai/dsh-scope';
import type { SkillDefinition, SkillSummary } from '@deepseek-ai/dsh-skill';
import { type NormalizedSkill } from './import.ts';
import type { SkillImportRequest, SkillInstallResult } from './types.ts';
export declare const name = "ui-skill-manager";
export declare const inject: string[];
/** Loopback HTTP prefix owned by the Skill manager. */
export declare const ROUTE_PATH = "/plugins/skill-manager/api";
/** Host configuration for workspace discovery and personal installation. */
export interface Config {
    /** Workspace used for project-sensitive Skill discovery. */
    readonly cwd?: string;
    /** DSH home whose personal `skills` directory receives imports. */
    readonly dshHome?: string;
}
type RequestHeaders = Readonly<Record<string, string | readonly string[] | undefined>>;
/**
 * Return whether a request came from a loopback, same-origin browser surface.
 * @param request - request headers used for loopback and Fetch Metadata checks.
 * @returns whether the Skill API may serve the request.
 */
export declare function isLoopbackRequest(request: {
    readonly headers: RequestHeaders;
}): boolean;
/**
 * Validate the JSON union accepted by the import endpoint.
 * @param value - parsed untrusted request body.
 * @returns validated file or GitHub import request.
 */
export declare function parseSkillImportRequest(value: unknown): SkillImportRequest;
interface SkillReader {
    readonly list: (options?: {
        readonly cwd?: string;
        readonly scope?: ScopeKey;
    }) => Promise<readonly SkillSummary[]>;
    readonly get: (name: string, options?: {
        readonly cwd?: string;
        readonly scope?: ScopeKey;
    }) => Promise<SkillDefinition | undefined>;
}
/** Session-addressed Skill view shared with the composer's catalog semantics. */
export interface SessionSkillView {
    readonly skills: SkillReader;
    readonly cwd: string;
    readonly scope?: ScopeKey;
}
/**
 * Resolve the exact live Session registry and project root used for Skill invocation.
 * @param ctx - Host services containing Sessions, Agents, presets, and the global fallback registry.
 * @param fallbackCwd - project root used when no Session is selected or a legacy header has no cwd.
 * @param rawSessionId - optional browser-selected Session identity.
 * @returns registry, cwd, and scope for list/get/import conflict reads.
 */
export declare function resolveSessionSkillView(ctx: Context, fallbackCwd: string, rawSessionId?: string): SessionSkillView;
type Normalize = (request: {
    readonly system: string;
    readonly input: string;
}) => Promise<NormalizedSkill>;
/**
 * Stage, normalize, conflict-adapt, validate, and atomically install one personal Skill.
 * @param options - import source, roots, current registry, and fixed model caller.
 * @returns installed personal Skill name and replacement status.
 */
export declare function importPersonalSkill(options: {
    readonly request: SkillImportRequest;
    readonly dshHome: string;
    readonly cwd: string;
    readonly scope?: ScopeKey;
    readonly skills: SkillReader;
    readonly normalize: Normalize;
}): Promise<SkillInstallResult>;
/**
 * Build the package-owned loopback HTTP handler.
 * @param ctx - Host context providing Web, Skill, and LLM services.
 * @param config - workspace and DSH Home overrides.
 * @returns request handler for the package route prefix.
 */
export declare function createSkillManagerHandler(ctx: Context, config?: Config): (request: IncomingMessage, response: ServerResponse) => Promise<void>;
/** Register the loopback Skill API under the Host Web server. */
export declare function apply(ctx: Context, config?: Config): void;
export {};
//# sourceMappingURL=index.d.ts.map