window.__ModuleLoader__.load({
	id: "@deepseek-ai/dsh-client-ui-skill-manager",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react = require("react");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region \0dsh-css:/private/tmp/dsh-publish-20260905.X1Ok1K/source/plugins/skill-manager/src/client/SkillManagerSection.module.css.mjs
		const css = ".IL5J7a_root{height:100%;min-height:0;color:var(--dsw-alias-label-primary);flex-direction:column;display:flex}.IL5J7a_header{flex:none;padding:0 0 16px}.IL5J7a_detailHeader h3{margin:0;font-size:20px;font-weight:650}.IL5J7a_importActions{flex:none;justify-content:flex-end;display:flex}.IL5J7a_importButton{background:var(--dsw-alias-label-primary);min-height:34px;color:var(--dsw-alias-bg-layer-1);cursor:pointer;font:inherit;border:0;border-radius:9px;justify-content:center;align-items:center;gap:8px;padding:0 14px;font-size:12px;font-weight:600;display:inline-flex}.IL5J7a_importButton:hover:not(:disabled){opacity:.86}.IL5J7a_importButton:focus-visible,.IL5J7a_github button:focus-visible,.IL5J7a_introToggle:focus-visible{outline:2px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 35%, transparent);outline-offset:2px}.IL5J7a_importButton:disabled,.IL5J7a_github button:disabled{cursor:default;opacity:.45}.IL5J7a_hiddenInput{opacity:0;pointer-events:none;width:1px;height:1px;position:fixed}.IL5J7a_github{--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);border-radius:12px;flex:none;grid-template-columns:max-content minmax(220px,1fr) max-content;align-items:center;gap:12px;margin:0 28px 16px;padding:12px;display:grid}.IL5J7a_githubCopy{flex-direction:column;gap:2px;min-width:140px;display:flex}.IL5J7a_githubCopy strong{font-size:12px;font-weight:600;line-height:18px}.IL5J7a_githubCopy span{color:var(--dsw-alias-label-caption);font-size:11px;line-height:16px}.IL5J7a_github input{box-sizing:border-box;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);width:100%;min-width:0;height:34px;color:inherit;font:inherit;border-radius:8px;outline:none;padding:0 11px;font-size:12px}.IL5J7a_github input:focus{border-color:color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, var(--dsw-alias-border-l1));box-shadow:0 0 0 2px color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent)}.IL5J7a_github button{background:var(--dsw-alias-label-primary);height:32px;color:var(--dsw-alias-bg-layer-1);cursor:pointer;font:inherit;border:0;border-radius:8px;padding:0 12px;font-size:11px;font-weight:600}.IL5J7a_status{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-secondary);border-radius:8px;flex:none;margin:0 28px 12px;padding:8px 11px;font-size:12px;line-height:18px}.IL5J7a_workspace{border-top:1px solid var(--dsw-alias-border-l2);flex:1;min-height:340px;overflow:hidden}.IL5J7a_skills{box-sizing:border-box;grid-template-columns:minmax(0,1fr);align-content:start;gap:2px;width:100%;min-width:0;max-width:820px;height:100%;padding:8px 12px 16px;display:grid;overflow:hidden auto}.IL5J7a_skillsHeader,.IL5J7a_fileTreeHeader{z-index:1;color:var(--dsw-alias-label-caption);background:var(--dsw-alias-bg-layer-1);justify-content:space-between;align-items:center;font-size:11px;line-height:18px;display:flex;position:sticky;top:0}.IL5J7a_skillsHeader{grid-column:1/-1;padding:5px 8px 7px}.IL5J7a_skillsHeader strong{font-weight:500}.IL5J7a_skillRow{width:100%;color:inherit;cursor:pointer;text-align:left;background:0 0;border:0;border-radius:9px;align-items:flex-start;gap:9px;padding:10px;display:flex}.IL5J7a_skillRow:hover,.IL5J7a_skillRow:focus-visible{background:var(--dsw-alias-interactive-bg-hover)}.IL5J7a_skillRow>svg{flex:none;margin-top:3px}.IL5J7a_skillCopy{flex-direction:column;flex:1;gap:3px;min-width:0;display:flex}.IL5J7a_skillTitle{align-items:center;gap:7px;min-width:0;display:flex}.IL5J7a_skillTitle strong{text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:600;line-height:20px;overflow:hidden}.IL5J7a_skillCategory{background:var(--dsw-alias-bg-layer-2);max-width:140px;color:var(--dsw-alias-label-secondary);text-overflow:ellipsis;white-space:nowrap;border-radius:999px;flex:none;padding:1px 7px;font-size:10px;line-height:16px;overflow:hidden}.IL5J7a_skillIntro{color:var(--dsw-alias-label-secondary);overflow-wrap:anywhere;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin:0;font-size:12px;line-height:18px;display:-webkit-box;overflow:hidden}.IL5J7a_writable,.IL5J7a_readonly{border-radius:999px;flex:none;align-self:flex-start;padding:2px 7px;font-size:10px;line-height:16px}.IL5J7a_writable{background:color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);color:var(--dsw-alias-brand-primary)}.IL5J7a_readonly{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-caption)}.IL5J7a_detail{flex-direction:column;min-width:0;height:100%;display:flex;overflow:hidden}.IL5J7a_detailHeader{border-bottom:1px solid var(--dsw-alias-border-l2);flex:none;grid-template-columns:88px minmax(0,1fr);gap:16px;padding:14px 20px;display:grid}.IL5J7a_backButton{height:30px;color:var(--dsw-alias-label-secondary);cursor:pointer;font:inherit;background:0 0;border:0;border-radius:7px;justify-self:start;align-items:center;gap:3px;padding:0 8px 0 4px;font-size:11px;display:inline-flex}.IL5J7a_backButton:hover,.IL5J7a_backButton:focus-visible{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.IL5J7a_detailSummary{min-width:0}.IL5J7a_detailTitle{justify-content:space-between;align-items:flex-start;gap:14px;display:flex}.IL5J7a_detailTitle>div{align-items:baseline;gap:9px;min-width:0;display:flex}.IL5J7a_detailHeader h3{text-overflow:ellipsis;white-space:nowrap;font-size:16px;line-height:22px;overflow:hidden}.IL5J7a_detailTitle>div>span{color:var(--dsw-alias-label-caption);flex:none;font-size:10px}.IL5J7a_introText{color:var(--dsw-alias-label-secondary);overflow-wrap:anywhere;white-space:pre-line;margin:8px 0 0;font-size:12px;line-height:19px}.IL5J7a_introClamped{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.IL5J7a_introToggle{color:var(--dsw-alias-label-secondary);cursor:pointer;font:inherit;background:0 0;border:0;margin:6px 0 0;padding:0;font-size:11px;line-height:18px}.IL5J7a_introToggle:hover{color:var(--dsw-alias-label-primary)}.IL5J7a_files{flex:1;grid-template-columns:190px minmax(0,1fr);min-height:0;display:grid}.IL5J7a_fileTree{border-right:1px solid var(--dsw-alias-border-l2);min-width:0;padding:8px;overflow:hidden auto}.IL5J7a_fileTreeHeader{padding:5px 7px 7px}.IL5J7a_fileRow{width:100%;color:inherit;cursor:pointer;text-align:left;text-overflow:ellipsis;white-space:nowrap;background:0 0;border:0;border-radius:7px;padding-top:7px;padding-bottom:7px;padding-right:8px;font-size:11px;line-height:18px;display:block;overflow:hidden}.IL5J7a_fileRow:hover,.IL5J7a_fileRow[aria-selected=true]{background:var(--dsw-alias-interactive-bg-hover)}.IL5J7a_preview{flex-direction:column;min-width:0;min-height:0;display:flex;overflow:hidden}.IL5J7a_previewHeader{border-bottom:1px solid var(--dsw-alias-border-l1);min-height:42px;color:var(--dsw-alias-label-secondary);flex:none;justify-content:space-between;align-items:center;gap:12px;padding:0 20px;font-size:10px;display:flex}.IL5J7a_previewHeader strong{min-width:0;color:var(--dsw-alias-label-primary);text-overflow:ellipsis;white-space:nowrap;font-size:11px;font-weight:550;overflow:hidden}.IL5J7a_previewHeader span{flex:none}.IL5J7a_previewBody{flex:1;min-height:0;padding:20px 24px 28px;overflow:auto}.IL5J7a_textPreview{overflow-wrap:anywhere;white-space:pre-wrap;margin:0;font:12px/1.65 ui-monospace,SFMono-Regular,Menlo,monospace}.IL5J7a_markdown{max-width:760px;margin:0 auto;font-size:13px;line-height:1.7}.IL5J7a_markdown h1{margin:0 0 16px;font-size:22px;line-height:1.35}.IL5J7a_markdown h2{margin:26px 0 12px;font-size:18px;line-height:1.4}.IL5J7a_markdown h3{margin:22px 0 10px;font-size:15px;line-height:1.5}.IL5J7a_markdown p,.IL5J7a_markdown ul,.IL5J7a_markdown ol{margin-top:10px;margin-bottom:10px}.IL5J7a_imagePreview{object-fit:contain;max-width:100%;max-height:520px;margin:auto;display:block}.IL5J7a_binaryPreview,.IL5J7a_emptyDetail{min-height:220px;color:var(--dsw-alias-label-secondary);flex-direction:column;justify-content:center;align-items:center;gap:8px;display:flex}.IL5J7a_binaryPreview span{font-size:12px}.IL5J7a_empty,.IL5J7a_emptyDetail p{color:var(--dsw-alias-label-caption);text-align:center;font-size:12px}@media (width<=840px){.IL5J7a_files{grid-template-columns:170px minmax(0,1fr)}.IL5J7a_github{grid-template-columns:minmax(0,1fr) max-content}.IL5J7a_githubCopy{display:none}}@media (width<=680px){.IL5J7a_header{align-items:center;padding-inline:18px}.IL5J7a_header p{display:none}.IL5J7a_github{margin-inline:18px}.IL5J7a_files{grid-template-columns:140px minmax(0,1fr)}.IL5J7a_detailHeader{grid-template-columns:1fr;gap:6px}.IL5J7a_previewBody{padding-inline:18px}}";
		const tagId = "@deepseek-ai/dsh-client-ui-skill-manager/SkillManagerSection.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "@deepseek-ai/dsh-client-ui-skill-manager";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var SkillManagerSection_module_css_default = {
			"backButton": "IL5J7a_backButton",
			"binaryPreview": "IL5J7a_binaryPreview",
			"detail": "IL5J7a_detail",
			"detailHeader": "IL5J7a_detailHeader",
			"detailSummary": "IL5J7a_detailSummary",
			"detailTitle": "IL5J7a_detailTitle",
			"empty": "IL5J7a_empty",
			"emptyDetail": "IL5J7a_emptyDetail",
			"fileRow": "IL5J7a_fileRow",
			"fileTree": "IL5J7a_fileTree",
			"fileTreeHeader": "IL5J7a_fileTreeHeader",
			"files": "IL5J7a_files",
			"github": "IL5J7a_github",
			"githubCopy": "IL5J7a_githubCopy",
			"header": "IL5J7a_header",
			"hiddenInput": "IL5J7a_hiddenInput",
			"imagePreview": "IL5J7a_imagePreview",
			"importActions": "IL5J7a_importActions",
			"importButton": "IL5J7a_importButton",
			"introClamped": "IL5J7a_introClamped",
			"introText": "IL5J7a_introText",
			"introToggle": "IL5J7a_introToggle",
			"markdown": "IL5J7a_markdown",
			"preview": "IL5J7a_preview",
			"previewBody": "IL5J7a_previewBody",
			"previewHeader": "IL5J7a_previewHeader",
			"readonly": "IL5J7a_readonly",
			"root": "IL5J7a_root",
			"skillCategory": "IL5J7a_skillCategory",
			"skillCopy": "IL5J7a_skillCopy",
			"skillIntro": "IL5J7a_skillIntro",
			"skillRow": "IL5J7a_skillRow",
			"skillTitle": "IL5J7a_skillTitle",
			"skills": "IL5J7a_skills",
			"skillsHeader": "IL5J7a_skillsHeader",
			"status": "IL5J7a_status",
			"textPreview": "IL5J7a_textPreview",
			"workspace": "IL5J7a_workspace",
			"writable": "IL5J7a_writable"
		};
		//#endregion
		//#region src/client/SkillManagerSection.tsx
		const SOURCE_LABELS = {
			personal: "个人",
			project: "项目",
			runtime: "运行时",
			custom: "自定义",
			bundled: "内置"
		};
		const MARKDOWN_LABELS = {
			code: {
				copyLabel: "复制",
				copiedLabel: "已复制"
			},
			footnotes: "脚注"
		};
		function skillIntro(skill) {
			return [skill.description, skill.whenToUse].filter((part) => part !== void 0 && part.trim() !== "").join("\n\n");
		}
		function fileBase64(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onerror = () => {
					reject(reader.error ?? /* @__PURE__ */ new Error("无法读取文件"));
				};
				reader.onload = () => {
					const result = reader.result;
					if (typeof result !== "string") {
						reject(/* @__PURE__ */ new Error("无法读取文件"));
						return;
					}
					resolve(result.slice(result.indexOf(",") + 1));
				};
				reader.readAsDataURL(file);
			});
		}
		async function uploadedFiles(list) {
			return Promise.all(Array.from(list).map(async (file) => ({
				path: file.webkitRelativePath || file.name,
				contentBase64: await fileBase64(file),
				...file.type === "" ? {} : { mimeType: file.type }
			})));
		}
		const FRONTMATTER = /^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/u;
		function visibleMarkdown(content) {
			return content.replace(FRONTMATTER, "").trimStart();
		}
		function fileSize(size) {
			if (size < 1024) return `${size} B`;
			if (size < 1048576) return `${Math.round(size / 1024)} KB`;
			return `${(size / 1048576).toFixed(1)} MB`;
		}
		function FilePreview({ file }) {
			if (file.kind === "image") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("img", {
				className: SkillManagerSection_module_css_default.imagePreview,
				src: file.dataUrl,
				alt: file.path
			});
			if (file.kind === "binary") return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: SkillManagerSection_module_css_default.binaryPreview,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: file.path }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: file.mimeType }),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [file.size.toLocaleString(), " bytes"] })
				]
			});
			if (file.kind === "markdown") return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: SkillManagerSection_module_css_default.markdown,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.MarkdownText, {
					text: visibleMarkdown(file.content),
					labels: MARKDOWN_LABELS
				})
			});
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("pre", {
				className: SkillManagerSection_module_css_default.textPreview,
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("code", { children: file.content })
			});
		}
		function SkillManagerSection({ listSkills, loadSkill, importSource }) {
			const [skills, setSkills] = (0, react.useState)([]);
			const [detail, setDetail] = (0, react.useState)();
			const [selectedFile, setSelectedFile] = (0, react.useState)();
			const [busy, setBusy] = (0, react.useState)(false);
			const [loadingDetail, setLoadingDetail] = (0, react.useState)(false);
			const [message, setMessage] = (0, react.useState)("");
			const [importMenuOpen, setImportMenuOpen] = (0, react.useState)(false);
			const [githubImportOpen, setGithubImportOpen] = (0, react.useState)(false);
			const [githubUrl, setGithubUrl] = (0, react.useState)("");
			const [introExpanded, setIntroExpanded] = (0, react.useState)(false);
			const fileInput = (0, react.useRef)(null);
			const folderInput = (0, react.useRef)(null);
			const githubInput = (0, react.useRef)(null);
			const refresh = (0, react.useCallback)(async () => {
				setSkills((await listSkills()).skills);
			}, [listSkills]);
			(0, react.useEffect)(() => {
				refresh().catch((error) => {
					setMessage(error instanceof Error ? error.message : String(error));
				});
			}, [refresh]);
			(0, react.useEffect)(() => {
				if (githubImportOpen) githubInput.current?.focus();
			}, [githubImportOpen]);
			const openSkill = (0, react.useCallback)(async (name) => {
				setLoadingDetail(true);
				setMessage("");
				try {
					const loaded = await loadSkill(name);
					setDetail(loaded);
					setSelectedFile(loaded.files[0]?.path);
					setIntroExpanded(false);
				} catch (error) {
					setMessage(error instanceof Error ? error.message : String(error));
				} finally {
					setLoadingDetail(false);
				}
			}, [loadSkill]);
			const runImport = (0, react.useCallback)(async (request) => {
				setBusy(true);
				setMessage("正在整理并验证 Skill…");
				try {
					const result = await importSource(request);
					await refresh();
					await openSkill(result.installed);
					setGithubImportOpen(false);
					setGithubUrl("");
					setMessage(`已安装 ${result.installed}${result.replaced ? "，原 Skill 已安全替换" : ""}`);
				} catch (error) {
					setMessage(error instanceof Error ? error.message : String(error));
				} finally {
					setBusy(false);
				}
			}, [
				importSource,
				openSkill,
				refresh
			]);
			const importFiles = (0, react.useCallback)(async (files) => {
				if (files === null || files.length === 0) return;
				await runImport({
					kind: "files",
					files: await uploadedFiles(files)
				});
			}, [runImport]);
			const currentFile = (0, react.useMemo)(() => detail?.files.find((file) => file.path === selectedFile) ?? detail?.files[0], [detail, selectedFile]);
			const introCollapsible = detail !== void 0 && (detail.explanation.length > 120 || detail.explanation.includes("\n"));
			const chooseImport = (id) => {
				setImportMenuOpen(false);
				setGithubImportOpen(id === "github");
				if (id === "file") fileInput.current?.click();
				if (id === "folder") folderInput.current?.click();
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
				className: SkillManagerSection_module_css_default.root,
				"aria-label": "Skill 管理",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SettingsSectionHeader, {
						className: SkillManagerSection_module_css_default.header,
						title: "Skill 管理",
						description: "查看当前能力，或把外部资料整理成个人 Skill。",
						actions: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: SkillManagerSection_module_css_default.importActions,
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Menu, {
									open: importMenuOpen,
									onClose: () => {
										setImportMenuOpen(false);
									},
									onSelect: chooseImport,
									align: "end",
									portal: true,
									items: [
										{
											id: "file",
											label: "导入文件",
											icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconPaperclipOutline16, { size: 16 })
										},
										{
											id: "folder",
											label: "导入文件夹",
											icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconFolderOpenOutline16, { size: 16 })
										},
										{
											id: "github",
											label: "从 GitHub 导入",
											icon: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconLinkOutline16, { size: 16 })
										}
									],
									anchor: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: SkillManagerSection_module_css_default.importButton,
										"aria-haspopup": "menu",
										"aria-expanded": importMenuOpen,
										disabled: busy,
										onClick: () => {
											setImportMenuOpen((open) => !open);
										},
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "导入 Skill" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronDownOutline14, { size: 12 })]
									})
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									ref: fileInput,
									className: SkillManagerSection_module_css_default.hiddenInput,
									"aria-label": "导入 Skill 文件",
									type: "file",
									multiple: true,
									onChange: (event) => {
										importFiles(event.currentTarget.files);
										event.currentTarget.value = "";
									}
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
									ref: folderInput,
									className: SkillManagerSection_module_css_default.hiddenInput,
									"aria-label": "导入 Skill 文件夹",
									type: "file",
									multiple: true,
									webkitdirectory: "",
									directory: "",
									onChange: (event) => {
										importFiles(event.currentTarget.files);
										event.currentTarget.value = "";
									}
								})
							]
						})
					}),
					githubImportOpen && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("form", {
						className: SkillManagerSection_module_css_default.github,
						onSubmit: (event) => {
							event.preventDefault();
							if (githubUrl.trim() !== "") runImport({
								kind: "github",
								url: githubUrl.trim()
							});
						},
						children: [
							/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: SkillManagerSection_module_css_default.githubCopy,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: "从 GitHub 导入" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "粘贴公开仓库首页地址" })]
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								ref: githubInput,
								"aria-label": "GitHub 仓库 URL",
								type: "url",
								placeholder: "https://github.com/owner/repository",
								value: githubUrl,
								onChange: (event) => {
									setGithubUrl(event.currentTarget.value);
								}
							}),
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: busy || githubUrl.trim() === "",
								children: "确认导入"
							})
						]
					}),
					message !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: SkillManagerSection_module_css_default.status,
						role: "status",
						children: message
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: SkillManagerSection_module_css_default.workspace,
						children: detail === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("aside", {
							className: SkillManagerSection_module_css_default.skills,
							"aria-label": "Skill 列表",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: SkillManagerSection_module_css_default.skillsHeader,
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "全部 Skill" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: skills.length })]
								}),
								skills.map((skill) => {
									const intro = skillIntro(skill);
									return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
										type: "button",
										className: SkillManagerSection_module_css_default.skillRow,
										onClick: () => {
											openSkill(skill.name);
										},
										disabled: busy || loadingDetail,
										children: [
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconSkillOutline16, { size: 16 }),
											/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
												className: SkillManagerSection_module_css_default.skillCopy,
												children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
													className: SkillManagerSection_module_css_default.skillTitle,
													children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: skill.name }), skill.category !== void 0 && skill.category.trim() !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
														className: SkillManagerSection_module_css_default.skillCategory,
														children: skill.category
													})]
												}), intro.trim() === "" ? null : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
													className: SkillManagerSection_module_css_default.skillIntro,
													children: intro
												})]
											}),
											/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: skill.writable ? SkillManagerSection_module_css_default.writable : SkillManagerSection_module_css_default.readonly,
												children: skill.writable ? "可写" : "只读"
											})
										]
									}, `${skill.source}:${skill.name}`);
								}),
								skills.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
									className: SkillManagerSection_module_css_default.empty,
									children: "当前没有 Skill"
								})
							]
						}) : /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("main", {
							className: SkillManagerSection_module_css_default.detail,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("section", {
								className: SkillManagerSection_module_css_default.detailHeader,
								"aria-label": `${detail.name} 介绍`,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: SkillManagerSection_module_css_default.backButton,
									"aria-label": "返回全部 Skill",
									onClick: () => {
										setDetail(void 0);
										setSelectedFile(void 0);
										setIntroExpanded(false);
									},
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.IconChevronLeftOutline14, { size: 14 }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "全部 Skill" })]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									className: SkillManagerSection_module_css_default.detailSummary,
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: SkillManagerSection_module_css_default.detailTitle,
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h3", { children: detail.name }),
												/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", { children: [detail.files.length, " 个文件"] }),
												detail.category !== void 0 && detail.category.trim() !== "" && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: SkillManagerSection_module_css_default.skillCategory,
													children: detail.category
												})
											] }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: detail.writable ? SkillManagerSection_module_css_default.writable : SkillManagerSection_module_css_default.readonly,
												children: detail.writable ? "个人 · 可写" : `${SOURCE_LABELS[detail.sourceGroup]} · 只读`
											})]
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
											className: `${SkillManagerSection_module_css_default.introText} ${introCollapsible && !introExpanded ? SkillManagerSection_module_css_default.introClamped : ""}`,
											children: detail.explanation
										}),
										introCollapsible && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
											type: "button",
											className: SkillManagerSection_module_css_default.introToggle,
											"aria-expanded": introExpanded,
											onClick: () => {
												setIntroExpanded((expanded) => !expanded);
											},
											children: introExpanded ? "收起介绍" : "展开介绍"
										})
									]
								})]
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: SkillManagerSection_module_css_default.files,
								children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("nav", {
									className: SkillManagerSection_module_css_default.fileTree,
									"aria-label": `${detail.name} 文件`,
									role: "tree",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: SkillManagerSection_module_css_default.fileTreeHeader,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: "文件" }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: detail.files.length })]
									}), detail.files.map((file) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
										title: file.path,
										type: "button",
										role: "treeitem",
										"aria-selected": currentFile?.path === file.path,
										className: SkillManagerSection_module_css_default.fileRow,
										style: { paddingLeft: `${12 + Math.max(0, file.path.split("/").length - 1) * 14}px` },
										onClick: () => {
											setSelectedFile(file.path);
										},
										children: file.path.split("/").at(-1)
									}, file.path))]
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("article", {
									className: SkillManagerSection_module_css_default.preview,
									"aria-label": currentFile?.path ?? "文件预览",
									children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
										className: SkillManagerSection_module_css_default.previewHeader,
										children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: currentFile?.path ?? "没有文件" }), currentFile !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: fileSize(currentFile.size) })]
									}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
										className: SkillManagerSection_module_css_default.previewBody,
										children: currentFile === void 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", { children: "没有可预览文件" }) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(FilePreview, { file: currentFile })
									})]
								})]
							})]
						})
					})
				]
			});
		}
		//#endregion
		//#region src/client/index.ts
		const API_PATH = "/plugins/skill-manager/api";
		const inject = ["slots", "sessions"];
		const PLAIN_CHAT_AGENT_PRESET = "chat";
		function sessionQuery(sessionId) {
			return sessionId === void 0 ? "" : `&sessionId=${encodeURIComponent(sessionId)}`;
		}
		async function jsonResponse(response, fallback) {
			const body = await response.json().catch(() => ({}));
			if (!response.ok) throw new Error(body.error ?? fallback);
			return body;
		}
		async function listSkills(sessionId) {
			const suffix = sessionId === void 0 ? "" : `?sessionId=${encodeURIComponent(sessionId)}`;
			return jsonResponse(await fetch(`${API_PATH}/skills${suffix}`, { cache: "no-store" }), "无法读取 Skill 列表");
		}
		async function loadSkill(name, sessionId) {
			return jsonResponse(await fetch(`${API_PATH}/skill?name=${encodeURIComponent(name)}${sessionQuery(sessionId)}`, { cache: "no-store" }), "无法读取 Skill");
		}
		async function importSource(request, sessionId) {
			const suffix = sessionId === void 0 ? "" : `?sessionId=${encodeURIComponent(sessionId)}`;
			return jsonResponse(await fetch(`${API_PATH}/import${suffix}`, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(request)
			}), "Skill 导入失败");
		}
		/** Contribute the native Skill manager as one Settings section. */
		function apply(ctx) {
			const currentSessionId = () => {
				const list = ctx.sessions.list.getSnapshot();
				const current = list.current;
				if (current === void 0 || list.byId[current]?.projectionValues?.agentPreset !== PLAIN_CHAT_AGENT_PRESET) return current;
				return list.ids.find((id) => list.byId[id]?.projectionValues?.agentPreset !== PLAIN_CHAT_AGENT_PRESET);
			};
			const injected = () => ({
				listSkills: () => listSkills(currentSessionId()),
				loadSkill: (name) => loadSkill(name, currentSessionId()),
				importSource: (request) => importSource(request, currentSessionId())
			});
			ctx.slots.inject("settings.section", () => ctx.slots.register({
				name: "settings.section",
				id: "skill",
				order: 2,
				label: () => "Skill 管理",
				inject: injected
			}, SkillManagerSection));
			ctx.slots.inject("settings.section.icon", () => ctx.slots.register({
				name: "settings.section.icon",
				id: "skill"
			}, _deepseek_ai_dsh_client_ui_primitives.IconSkillOutline16));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map