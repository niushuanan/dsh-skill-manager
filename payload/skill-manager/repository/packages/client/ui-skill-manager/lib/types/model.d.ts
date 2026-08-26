import type { GenerateOptions, StreamChunk } from '@deepseek-ai/dsh-llm';
import { type NormalizedSkill } from './import.ts';
/** Fixed provider route used only for imported Skill normalization. */
export declare const NORMALIZER_PROVIDER = "deepseek-official";
/** Fixed vision-capable model used only for imported Skill normalization. */
export declare const NORMALIZER_MODEL = "deepseek-v4-flash-vision-exp";
interface LlmStreamContext {
    readonly llm: {
        readonly stream: (options: GenerateOptions) => AsyncIterable<StreamChunk>;
    };
}
/**
 * Normalize one inert staged-file request through the fixed no-tool LLM route.
 * @param ctx - LLM streaming service.
 * @param request - fixed system instruction and inert serialized input.
 * @param signal - optional caller cancellation.
 * @returns validated model proposal.
 */
export declare function generateNormalizedSkill(ctx: LlmStreamContext, request: {
    readonly system: string;
    readonly input: string;
}, signal?: AbortSignal): Promise<NormalizedSkill>;
export {};
//# sourceMappingURL=model.d.ts.map