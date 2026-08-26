import { type ReactElement } from 'react';
import type { ManagedSkillDetail, ManagedSkillSummary, SkillImportRequest, SkillInstallResult } from '../types.ts';
export interface SkillManagerInjected {
    readonly listSkills: () => Promise<{
        readonly skills: readonly ManagedSkillSummary[];
    }>;
    readonly loadSkill: (name: string) => Promise<ManagedSkillDetail>;
    readonly importSource: (request: SkillImportRequest) => Promise<SkillInstallResult>;
}
export declare function SkillManagerSection({ listSkills, loadSkill, importSource }: SkillManagerInjected): ReactElement;
//# sourceMappingURL=SkillManagerSection.d.ts.map