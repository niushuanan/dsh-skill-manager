import type { ScopeKey } from '@deepseek-ai/dsh-scope';
import type { ManagedSkillDetail, ManagedSkillSummary } from './types.ts';
interface SkillSummaryLike {
    readonly name: string;
    readonly description: string;
    readonly whenToUse?: string;
    readonly source: string;
    readonly provider: string;
}
interface SkillDefinitionLike extends SkillSummaryLike {
    readonly content: string;
    readonly path?: string;
    readonly resourceBase?: {
        readonly kind: 'directory';
        readonly path: string;
    } | {
        readonly kind: 'url';
        readonly url: string;
    } | {
        readonly kind: 'opaque';
        readonly description: string;
    };
}
interface SkillsReader {
    readonly list: (options?: {
        readonly cwd?: string;
        readonly scope?: ScopeKey;
    }) => Promise<readonly SkillSummaryLike[]>;
    readonly get: (name: string, options?: {
        readonly cwd?: string;
        readonly scope?: ScopeKey;
    }) => Promise<SkillDefinitionLike | undefined>;
}
/**
 * Project the winning Skill catalog into user-facing source and writeability metadata.
 * @param skills - current Skill registry reader.
 * @param cwd - workspace used by project-sensitive providers.
 * @param scope - optional active Session scope used by preset-specific providers.
 * @returns sorted Settings rows.
 */
export declare function listManagedSkills(skills: SkillsReader, cwd: string, scope?: ScopeKey): Promise<ManagedSkillSummary[]>;
/**
 * Read one winning Skill and preview only its owned regular files.
 * @param skills - current Skill registry reader.
 * @param cwd - workspace used by project-sensitive providers.
 * @param name - exact Skill name selected by the user.
 * @param scope - optional active Session scope used by preset-specific providers.
 * @returns human-readable metadata and bounded file previews.
 */
export declare function readManagedSkill(skills: SkillsReader, cwd: string, name: string, scope?: ScopeKey): Promise<ManagedSkillDetail>;
export {};
//# sourceMappingURL=catalog.d.ts.map