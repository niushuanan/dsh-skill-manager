import type { UploadedSkillFile } from './types.ts';
/** Validated model proposal for one installable directory Skill. */
export interface NormalizedSkill {
    readonly name: string;
    readonly description: string;
    /** Short human-readable grouping tag required in the emitted frontmatter. */
    readonly category: string;
    readonly skillMarkdown: string;
    readonly resources: readonly {
        readonly sourcePath: string;
        readonly targetPath: string;
    }[];
}
/**
 * Accept one plain GitHub repository URL and canonicalize its clone URL.
 * @param value - user-entered URL.
 * @returns canonical HTTPS URL ending in `.git`.
 */
export declare function validateGitHubRepositoryUrl(value: string): string;
/**
 * Validate an archive, browser, model, or filesystem relative path.
 * @param path - untrusted relative path.
 * @returns normalized POSIX path confined to its caller-owned root.
 */
export declare function validateRelativePath(path: string): string;
/**
 * Stage bounded browser files or one ZIP without permitting traversal or overwrite.
 * @param root - fresh operation directory.
 * @param files - untrusted browser file payloads.
 * @returns when every accepted byte is stored under `root`.
 */
export declare function stageUpload(root: string, files: readonly UploadedSkillFile[]): Promise<void>;
/** One staged file represented as inert text or copyable binary metadata. */
export interface NormalizationFile {
    readonly path: string;
    readonly kind: 'text' | 'binary';
    readonly size: number;
    readonly content?: string;
}
/**
 * Read staged material as inert model input without following links or including common secret files.
 * @param root - staged import directory.
 * @returns bounded files safe to serialize into the normalization prompt.
 */
export declare function inspectStagedFiles(root: string): Promise<NormalizationFile[]>;
interface ExistingConflict {
    readonly name: string;
    readonly description: string;
    readonly content: string;
}
/**
 * Frame staged data and at most one direct conflict for narrow Skill normalization.
 * @param input - bounded staged files and optional same-name definition.
 * @returns fixed system instruction and inert JSON input.
 */
export declare function buildNormalizationRequest(input: {
    readonly files: readonly NormalizationFile[];
    readonly conflict?: ExistingConflict;
}): {
    system: string;
    input: string;
};
/**
 * Parse and validate the model's no-prose Skill proposal.
 * @param output - complete model text.
 * @returns normalized name, Markdown, and resource mappings.
 */
export declare function parseNormalizationOutput(output: string): NormalizedSkill;
/**
 * Validate and swap one candidate into the personal Skill directory with rollback.
 * @param options - personal destination, staging root, and normalized proposal.
 * @returns installed name and whether a personal directory was replaced.
 */
export declare function installNormalizedSkill(options: {
    readonly personalSkillsRoot: string;
    readonly stagedRoot: string;
    readonly normalized: NormalizedSkill;
}): Promise<{
    name: string;
    replaced: boolean;
}>;
export {};
//# sourceMappingURL=import.d.ts.map