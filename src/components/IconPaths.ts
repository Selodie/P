/**
 * Icons adapted from https://phosphoricons.com/ and from https://icon-sets.iconify.design/skill-icons
 *
 * To add icons :
 * 1. Find the icon you want.
 * 2. Click “Copy SVG”.
 * 3. Paste the SVG code in your editor.
 * 4. Remove the `<svg>` wrapper so you only have elements like `<path>`, `<circle>`, `<rect>` etc.
 * 5. Remove any `stroke="#000000"` attributes
 * 6. Replace any `fill="#000000"` attributes with `stroke="none"`
 *    (or add `stroke="none"` on shapes with no `fill` or `stroke` specified).
 */
export const iconPaths = {
	'terminal-window': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"/>`,
	trophy: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M56 56v55.1c0 39.7 31.8 72.6 71.5 72.9a72 72 0 0 0 72.5-72V56a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8Zm40 168h64m-32-40v40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M198.2 128h9.8a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32M58 128H47.9a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32"/>`,
	strategy: `<circle cx="68" cy="188" r="28" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m136 40 16 16c40 40 8 88-24 96"/>`,
	'paper-plane-tilt': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>`,
	'arrow-right': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176m-72-72 72 72-72 72"/>`,
	'arrow-left': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40m72-72-72 72 72 72"/>`,
	code: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m64 88-48 40 48 40m128-80 48 40-48 40M160 40 96 216"/>`,
	'microphone-stage': `<circle cx="168" cy="88" r="64" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m213.3 133.3-90.6-90.6M100 156l-12 12m16.8-70.1L28.1 202.5a7.9 7.9 0 0 0 .8 10.4l14.2 14.2a7.9 7.9 0 0 0 10.4.8l104.6-76.7"/>`,
	'pencil-line': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4Zm40-152 56 56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 216H96l-55.5-55.5M164 92l-96 96"/>`,
	'rocket-launch': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>`,
	list: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>`,
	heart: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"/>`,
	'moon-stars': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,
	sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
	'twitter-logo': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 88c0-22 18.5-40.3 40.5-40a40 40 0 0 1 36.2 24H240l-32.3 32.3A127.9 127.9 0 0 1 80 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48Z"/>`,
	'codepen-logo': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 101-104 59-104-59 100.1-56.8a8.3 8.3 0 0 1 7.8 0Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 165-100.1 56.8a8.3 8.3 0 0 1-7.8 0L24 165l104-59Zm0-64v64M24 101v64m104-5v62.8m0-179.6V106"/>`,
	'github-logo': `<g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke-width="14.7" d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"/><path fill="none" stroke-width="16" d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"/><path fill="none" stroke-width="16" d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"/><path fill="none" stroke-width="18.7" d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5" /><path fill="none" stroke-width="22.7" d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13" /><path fill="none" stroke-width="13.3" d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"/></g>`,
	'twitch-logo': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M165 200h-42a8 8 0 0 0-5 2l-46 38v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v108a8 8 0 0 1-3 6l-43 36a8 8 0 0 1-5 2Zm3-112v48m-48-48v48"/>`,
	'youtube-logo': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m160 128-48-32v64l48-32z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M24 128c0 30 3 47 5 56a16 16 0 0 0 10 11c34 13 89 13 89 13s56 0 89-13a16 16 0 0 0 10-11c2-9 5-26 5-56s-3-47-5-56a16 16 0 0 0-10-11c-33-13-89-13-89-13s-55 0-89 13a16 16 0 0 0-10 11c-2 9-5 26-5 56Z"/>`,
	'dribbble-logo': `<circle cx="128" cy="128" r="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M71 205a160 160 0 0 1 137-77l16 1m-36-76a160 160 0 0 1-124 59 165 165 0 0 1-30-3"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M86 42a161 161 0 0 1 74 177"/>`,
	'discord-logo': `<circle stroke="none" cx="96" cy="144" r="12"/><circle stroke="none" cx="160" cy="144" r="12"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M74 80a175 175 0 0 1 54-8 175 175 0 0 1 54 8m0 96a175 175 0 0 1-54 8 175 175 0 0 1-54-8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m155 182 12 24a8 8 0 0 0 9 4c25-6 46-16 61-30a8 8 0 0 0 3-8L206 59a8 8 0 0 0-5-5 176 176 0 0 0-30-9 8 8 0 0 0-9 5l-8 24m-53 108-12 24a8 8 0 0 1-9 4c-25-6-46-16-61-30a8 8 0 0 1-3-8L50 59a8 8 0 0 1 5-5 176 176 0 0 1 30-9 8 8 0 0 1 9 5l8 24"/>`,
	'linkedin-logo': `<rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"/><circle stroke="none" cx="88" cy="80" r="12"/>`,
	'instagram-logo': `<circle cx="128" cy="128" r="40" fill="none" stroke-miterlimit="10" stroke-width="16"/><rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="48"/><circle cx="180" cy="76" r="12" stroke="none" />`,
	'tiktok-logo': `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M168 106a96 96 0 0 0 56 18V84a56 56 0 0 1-56-56h-40v128a28 28 0 1 1-40-25V89a68 68 0 1 0 80 67Z"/>`,
	'dev-logo' :  `<path d="M232,56H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V72A16,16,0,0,0,232,56Zm0,128H24V72H232V184ZM128,104v16h8a8,8,0,0,1,0,16h-8v16h16a8,8,0,0,1,0,16H120a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16Zm87.7-5.83-18,64a8,8,0,0,1-15.4,0l-18-64a8,8,0,0,1,15.4-4.34L190,130.45l10.3-36.62a8,8,0,1,1,15.4,4.34ZM64,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h8a32,32,0,0,0,32-32V120A32,32,0,0,0,64,88Zm16,48a16,16,0,0,1-16,16V104a16,16,0,0,1,16,16Z"></path>`,
	'download-logo' : `<path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-61.66a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,164.69V120a8,8,0,0,1,16,0v44.69l10.34-10.35A8,8,0,0,1,157.66,154.34Z"></path>`,
	'css' : `<g fill="none"><rect width="256" height="256" fill="#0277bd" rx="60"/><path fill="#ebebeb" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g>`,
	'html' : `<g fill="none"><rect width="256" height="256" fill="#e14e1d" rx="60"/><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#ebebeb" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g>`,
	'laravel' : `<g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#ff2d20" fill-rule="evenodd" d="M215.846 78.314q.097.366.098.747v39.199c0 .503-.131.997-.379 1.432a2.84 2.84 0 0 1-1.037 1.047l-32.446 18.942v37.545a2.87 2.87 0 0 1-1.409 2.48l-67.728 39.535c-.155.089-.324.146-.493.207c-.064.022-.123.061-.19.079a2.8 2.8 0 0 1-1.445 0c-.077-.022-.148-.065-.222-.093c-.155-.057-.317-.107-.465-.193l-67.714-39.535a2.85 2.85 0 0 1-1.036-1.047a2.9 2.9 0 0 1-.38-1.433V59.629q.002-.387.099-.75c.02-.083.07-.158.098-.24c.053-.15.102-.303.18-.443c.053-.093.13-.168.194-.253c.08-.115.155-.233.25-.333c.08-.082.187-.143.278-.214c.102-.086.194-.179.31-.247h.004L76.27 37.382a2.8 2.8 0 0 1 2.819 0l33.859 19.767h.007c.112.072.208.161.31.243c.091.072.193.136.274.215c.099.103.17.221.254.336c.06.085.141.16.19.253c.081.143.127.293.184.443c.028.082.077.157.098.243q.097.367.099.747v73.45l28.214-16.473v-37.55c0-.25.035-.503.099-.742c.025-.086.07-.161.099-.243c.056-.15.105-.304.183-.443c.053-.093.13-.168.19-.254c.085-.114.155-.232.254-.332c.081-.082.183-.143.275-.215c.105-.085.197-.178.31-.246h.004l33.862-19.768a2.79 2.79 0 0 1 2.818 0l33.859 19.768c.12.072.211.16.317.243c.088.071.19.136.271.214c.099.104.169.222.254.336c.063.086.141.16.19.254c.081.14.127.293.183.443c.032.082.078.157.099.243m-5.546 38.292V84.009l-11.849 6.916l-16.369 9.557v32.597l28.221-16.473zm-33.859 58.966v-32.618l-16.101 9.325l-45.979 26.609v32.925zM46.644 64.577v110.995l62.073 36.238v-32.919l-32.428-18.61l-.01-.007l-.015-.007c-.109-.064-.2-.157-.303-.236c-.088-.071-.19-.128-.267-.207l-.007-.01c-.092-.09-.156-.2-.233-.301c-.07-.096-.155-.178-.211-.278l-.004-.011c-.064-.107-.103-.236-.148-.357c-.046-.107-.106-.207-.134-.322v-.004c-.035-.135-.042-.278-.057-.418c-.014-.107-.042-.214-.042-.321V81.051L58.493 71.49l-11.849-6.91zm31.04-21.415L49.474 59.63l28.203 16.466l28.207-16.47l-28.207-16.463zm14.671 102.764l16.366-9.553V64.577l-11.85 6.917l-16.368 9.556v71.797zm86.909-83.332l-28.208 16.467l28.208 16.466l28.203-16.47zm-2.823 37.888l-16.369-9.557l-11.848-6.916v32.597l16.365 9.553l11.852 6.92zm-64.905 73.458l41.373-23.952l20.682-11.968l-28.186-16.456l-32.453 18.946l-29.578 17.267z" clip-rule="evenodd"/></g>`,
	'bootstrap' : `<g fill="none"><rect width="256" height="256" fill="url(#skillIconsBootstrap0)" rx="60"/><g filter="url(#skillIconsBootstrap2)"><path fill="url(#skillIconsBootstrap1)" d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"/><path stroke="#fff" stroke-width="2" d="M131.97 196.157c29.676 0 47.559-14.531 47.559-38.497c0-18.117-12.759-31.232-31.706-33.309v-.754c13.92-2.265 24.843-15.192 24.843-29.628c0-20.57-16.239-33.969-40.986-33.969H76v136.157zM97.653 77.267h28.807c15.66 0 24.553 6.983 24.553 19.627c0 13.493-10.343 21.041-29.096 21.041H97.653zm0 101.623v-44.819h28.613c20.494 0 31.127 7.548 31.127 22.268c0 14.719-10.343 22.551-29.87 22.551z"/></g><defs><linearGradient id="skillIconsBootstrap0" x1="0" x2="256" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop stop-color="#9013fe"/><stop offset="1" stop-color="#6b11f4"/></linearGradient><linearGradient id="skillIconsBootstrap1" x1="85.793" x2="148.541" y1="68.962" y2="175.084" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#f1e5fc"/></linearGradient><filter id="skillIconsBootstrap2" width="137.529" height="170.157" x="59" y="47" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_158_100"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_158_100" result="shape"/></filter></defs></g>`,
	'nodeJs' : `<g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#81cd39" d="M119.878 31.116c4.919-2.815 11.325-2.828 16.239 0c24.722 13.97 49.452 27.917 74.17 41.895c4.65 2.619 7.759 7.793 7.712 13.15v84.045c.035 5.579-3.382 10.877-8.287 13.436c-24.641 13.893-49.27 27.802-73.907 41.695c-5.019 2.87-11.554 2.649-16.418-.457c-7.387-4.282-14.787-8.544-22.175-12.822c-1.51-.9-3.212-1.616-4.278-3.08c.943-1.27 2.628-1.428 3.997-1.983c3.083-.981 5.916-2.555 8.748-4.082c.717-.49 1.591-.302 2.278.136c6.317 3.622 12.579 7.35 18.917 10.937c1.352.781 2.721-.256 3.877-.9c24.18-13.667 48.39-27.281 72.567-40.952c.896-.431 1.391-1.382 1.318-2.363c.017-27.725.004-55.454.009-83.18c.102-1.112-.542-2.136-1.549-2.592c-24.555-13.829-49.099-27.678-73.65-41.51a2.56 2.56 0 0 0-2.892-.005c-24.552 13.837-49.09 27.7-73.642 41.527c-1.003.457-1.676 1.464-1.557 2.58c.005 27.726 0 55.455 0 83.184a2.35 2.35 0 0 0 1.336 2.334c6.551 3.715 13.111 7.404 19.667 11.107c3.694 1.987 8.228 3.169 12.298 1.646c3.59-1.288 6.107-4.953 6.039-8.765c.034-27.563-.017-55.13.025-82.69c-.09-1.223 1.071-2.234 2.261-2.118c3.148-.022 6.3-.043 9.448.008c1.314-.03 2.218 1.288 2.056 2.52c-.013 27.738.034 55.476-.021 83.213c.008 7.393-3.029 15.437-9.867 19.054c-8.423 4.363-18.835 3.438-27.157-.746c-7.204-3.596-14.08-7.84-21.156-11.692c-4.918-2.545-8.318-7.864-8.283-13.439V86.161c-.052-5.468 3.182-10.736 7.975-13.317c24.637-13.903 49.27-27.818 73.902-41.728"/><path fill="#81cd39" d="M141.372 89.335c10.745-.692 22.248-.41 31.917 4.884c7.487 4.056 11.637 12.57 11.769 20.887c-.209 1.121-1.382 1.74-2.453 1.663c-3.117-.004-6.236.043-9.353-.021c-1.323.051-2.091-1.168-2.257-2.337c-.896-3.98-3.067-7.921-6.812-9.841c-5.75-2.878-12.416-2.733-18.687-2.673c-4.576.242-9.498.639-13.376 3.33c-2.977 2.039-3.881 6.155-2.819 9.47c1.002 2.38 3.749 3.148 5.997 3.856c12.95 3.387 26.672 3.049 39.373 7.506c5.26 1.817 10.404 5.35 12.204 10.856c2.355 7.38 1.323 16.2-3.928 22.124c-4.258 4.875-10.459 7.529-16.644 8.97c-8.228 1.835-16.767 1.882-25.123 1.067c-7.857-.896-16.034-2.96-22.099-8.313c-5.187-4.504-7.72-11.522-7.469-18.294c.06-1.144 1.199-1.942 2.295-1.848c3.139-.025 6.279-.034 9.418.005c1.254-.09 2.184.994 2.248 2.176c.579 3.791 2.004 7.771 5.31 10.018c6.381 4.117 14.388 3.835 21.694 3.95c6.052-.268 12.847-.349 17.787-4.35c2.606-2.282 3.378-6.1 2.674-9.384c-.763-2.773-3.664-4.065-6.155-4.91c-12.783-4.043-26.659-2.576-39.318-7.149c-5.14-1.816-10.11-5.25-12.084-10.53c-2.755-7.473-1.493-16.717 4.308-22.44c5.656-5.695 13.82-7.888 21.583-8.672"/></g>`,
	'php' : `<g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#000" d="M49.158 100.246h28.408q12.507.106 18.126 7.208q5.618 7.101 3.71 19.398q-.742 5.618-3.286 11.024q-2.438 5.406-6.784 9.752q-5.3 5.511-11.342 6.996q-6.043 1.484-12.508 1.484h-12.72l-4.028 20.14H34zM61.56 112.33l-6.36 31.8q.636.106 1.272.106h1.484q10.177.106 16.96-2.014q6.784-2.226 9.116-15.476q1.908-11.13-3.816-12.826q-5.618-1.695-14.098-1.59q-1.271.106-2.438.106h-2.226zM116.186 80h14.628l-4.134 20.246h13.144q10.811.213 16.112 4.452q5.406 4.24 3.18 16.112l-7.102 35.298h-14.84l6.784-33.708q1.059-5.3-.636-7.526t-7.314-2.226l-11.766-.106l-8.692 43.566h-14.628zm58.638 20.246h28.408q12.507.106 18.126 7.208q5.618 7.101 3.71 19.398q-.742 5.618-3.286 11.024q-2.438 5.406-6.784 9.752q-5.3 5.511-11.342 6.996q-6.043 1.484-12.508 1.484h-12.72l-4.028 20.14h-14.734zm12.402 12.084l-6.36 31.8q.636.106 1.272.106h1.484q10.177.106 16.96-2.014q6.784-2.226 9.116-15.476q1.908-11.13-3.816-12.826q-5.618-1.695-14.098-1.59q-1.272.106-2.438.106h-2.226z"/></g>`,
	'sql' :`<g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><g clip-path="url(#skillIconsMysqlLight0)"><path fill="#00678c" fill-rule="evenodd" d="M203.801 178.21c-9.79-.272-17.385.731-23.75 3.409c-1.833.736-4.774.736-5.016 3.043c.98.968 1.098 2.552 1.957 3.894c1.467 2.435 4.041 5.715 6.365 7.417l7.834 5.598c4.774 2.917 10.16 4.622 14.811 7.542c2.694 1.704 5.386 3.894 8.08 5.721c1.372.973 2.203 2.558 3.918 3.163v-.368c-.856-1.091-1.103-2.672-1.956-3.894l-3.677-3.526c-3.547-4.744-7.957-8.884-12.731-12.287c-3.918-2.677-12.484-6.326-14.076-10.825l-.241-.273c2.689-.272 5.872-1.219 8.445-1.949c4.165-1.091 7.957-.851 12.238-1.945l5.88-1.704v-1.091c-2.204-2.189-3.795-5.11-6.119-7.176c-6.242-5.353-13.102-10.586-20.203-14.965c-3.794-2.432-8.692-4.017-12.731-6.081c-1.473-.731-3.918-1.096-4.774-2.312c-2.209-2.672-3.43-6.204-5.021-9.369l-10.037-21.168c-2.203-4.745-3.553-9.49-6.242-13.869c-12.611-20.683-26.324-33.212-47.38-45.502c-4.527-2.555-9.913-3.654-15.64-4.99l-9.18-.49c-1.962-.851-3.919-3.164-5.633-4.26c-6.978-4.38-24.974-13.868-30.12-1.363c-3.305 7.907 4.899 15.692 7.684 19.709c2.085 2.798 4.774 5.96 6.247 9.124c.823 2.067 1.098 4.259 1.957 6.449c1.956 5.352 3.794 11.316 6.365 16.306c1.372 2.555 2.813 5.235 4.527 7.545c.98 1.363 2.695 1.947 3.06 4.136c-1.715 2.435-1.833 6.081-2.813 9.127c-4.409 13.748-2.694 30.78 3.548 40.902c1.962 3.04 6.585 9.734 12.858 7.177c5.509-2.19 4.28-9.124 5.871-15.208c.37-1.458.124-2.432.856-3.408v.273l5.021 10.097c3.795 5.961 10.408 12.167 15.914 16.306c2.936 2.19 5.263 5.964 8.934 7.3v-.368h-.241c-.736-1.091-1.839-1.582-2.818-2.433c-2.203-2.189-4.651-4.867-6.366-7.299c-5.139-6.812-9.666-14.357-13.708-22.142c-1.961-3.771-3.676-7.908-5.262-11.679c-.741-1.461-.741-3.654-1.962-4.379c-1.839 2.672-4.527 4.99-5.88 8.273c-2.327 5.23-2.568 11.679-3.424 18.371c-.494.122-.275 0-.494.272c-3.913-.97-5.263-4.99-6.73-8.393c-3.672-8.638-4.287-22.507-1.104-32.484c.856-2.555 4.533-10.585 3.065-13.018c-.74-2.312-3.183-3.648-4.533-5.475c-1.591-2.312-3.3-5.23-4.403-7.785c-2.936-6.817-4.404-14.357-7.59-21.17c-1.473-3.164-4.041-6.45-6.124-9.367c-2.327-3.286-4.892-5.599-6.73-9.49c-.612-1.363-1.468-3.528-.489-4.99c.242-.973.735-1.363 1.71-1.581c1.59-1.364 6.124.365 7.715 1.09c4.527 1.827 8.322 3.529 12.117 6.081c1.715 1.216 3.553 3.529 5.756 4.14h2.574c3.918.85 8.322.272 11.99 1.363c6.49 2.072 12.364 5.11 17.632 8.398c16.035 10.098 29.26 24.454 38.193 41.611c1.468 2.798 2.08 5.353 3.43 8.273c2.574 5.964 5.757 12.045 8.322 17.888c2.574 5.718 5.021 11.562 8.693 16.306c1.838 2.555 9.18 3.891 12.484 5.23c2.45 1.091 6.242 2.073 8.451 3.409c4.159 2.555 8.322 5.475 12.237 8.273c1.956 1.456 8.081 4.499 8.445 6.926zM78.958 72.487a19.6 19.6 0 0 0-5.015.608v.273h.241c.98 1.947 2.695 3.286 3.918 4.99l2.818 5.84l.242-.272c1.714-1.216 2.573-3.163 2.573-6.08c-.735-.851-.856-1.705-1.468-2.556c-.735-1.216-2.326-1.827-3.309-2.797z" clip-rule="evenodd"/></g><defs><clipPath id="skillIconsMysqlLight0"><path fill="#fff" d="M38 38h180v180H38z"/></clipPath></defs></g>`,
	'figma' : `<g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><g clip-path="url(#skillIconsFigmaLight0)"><path fill="#0acf83" d="M94.347 228c18.4 0 33.333-14.933 33.333-33.333v-33.334H94.347c-18.4 0-33.334 14.934-33.334 33.334S75.947 228 94.347 228"/><path fill="#a259ff" d="M61.013 128c0-18.4 14.934-33.333 33.334-33.333h33.333v66.666H94.347c-18.4 0-33.334-14.933-33.334-33.333"/><path fill="#f24e1e" d="M61.013 61.333C61.013 42.933 75.947 28 94.347 28h33.333v66.667H94.347c-18.4 0-33.334-14.934-33.334-33.334"/><path fill="#ff7262" d="M127.68 28h33.333c18.4 0 33.334 14.933 33.334 33.333s-14.934 33.334-33.334 33.334H127.68z"/><path fill="#1abcfe" d="M194.347 128c0 18.4-14.934 33.333-33.334 33.333S127.68 146.4 127.68 128s14.933-33.333 33.333-33.333S194.347 109.6 194.347 128"/></g><defs><clipPath id="skillIconsFigmaLight0"><path fill="#fff" d="M61 28h133.36v200H61z"/></clipPath></defs></g>`,
	'mongoDb' : `<g fill="none"><rect width="256" height="256" fill="#023430" rx="60"/><path fill="#10aa50" d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99 99 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"/><path fill="#b8c4c2" d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a224 224 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397"/><path fill="#12924f" d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a500 500 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92 92 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684"/></g>`,
	'react' : `<g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#00d8ff" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"/><path stroke="#00d8ff" stroke-width="8.91" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clip-rule="evenodd"/><path stroke="#00d8ff" stroke-width="8.91" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clip-rule="evenodd"/><path stroke="#00d8ff" stroke-width="8.91" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clip-rule="evenodd"/></g>`,
	'markdown' : `<g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path stroke="#000" stroke-width="10" d="M217 69H39c-5.523 0-10 4.477-10 10v98c0 5.523 4.477 10 10 10h178c5.523 0 10-4.477 10-10V79c0-5.523-4.477-10-10-10Z"/><path fill="#000" d="M54 162V94h20l20 25l20-25h20v68h-20v-39l-20 25l-20-25v39zm125 0l-30-33h20V94h20v35h20z"/></g>`,
	'github' : `<g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#161614" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"/></g>`,
	'sass' : `<g fill="none"><rect width="256" height="256" fill="#cd6799" rx="60"/><g clip-path="url(#skillIconsSass0)"><path fill="#fff" d="M200.107 139.163c-6.974.036-13.034 1.716-18.109 4.198c-1.862-3.687-3.724-6.973-4.053-9.383c-.365-2.811-.803-4.527-.365-7.886s2.41-8.141 2.373-8.506s-.438-2.081-4.454-2.118s-7.484.767-7.886 1.826c-.402 1.058-1.168 3.468-1.679 5.951c-.694 3.651-8.033 16.685-12.231 23.512c-1.351-2.665-2.519-5.002-2.775-6.864c-.365-2.811-.803-4.527-.365-7.886s2.41-8.142 2.373-8.507s-.438-2.081-4.454-2.117s-7.485.766-7.886 1.825c-.402 1.059-.84 3.542-1.68 5.951c-.839 2.41-10.587 24.17-13.143 29.792a168 168 0 0 1-3.249 6.754s-.037.11-.146.292a91 91 0 0 1-1.096 2.081v.037c-.547.986-1.132 1.898-1.424 1.898c-.219 0-.62-2.628.073-6.206c1.461-7.558 4.929-19.314 4.893-19.715c0-.219.657-2.264-2.264-3.323c-2.848-1.059-3.87.694-4.126.694c-.255 0-.438.621-.438.621s3.177-13.217-6.06-13.217c-5.769 0-13.728 6.316-17.67 12.012a5003 5003 0 0 0-13.437 7.338c-2.153 1.205-4.38 2.41-6.462 3.542c-.146-.146-.292-.329-.438-.475c-11.172-11.939-31.836-20.372-30.96-36.4c.329-5.842 2.337-21.176 39.686-39.796c30.741-15.151 55.203-10.953 59.438-1.643c6.06 13.29-13.107 37.97-44.87 41.548c-12.122 1.351-18.474-3.322-20.08-5.074c-1.68-1.826-1.936-1.935-2.557-1.57c-1.022.547-.365 2.19 0 3.139c.95 2.483 4.856 6.864 11.464 9.018c5.842 1.899 20.044 2.958 37.24-3.687c19.241-7.448 34.283-28.15 29.865-45.491c-4.417-17.598-33.625-23.403-61.263-13.582c-16.43 5.842-34.246 15.042-47.061 27.017c-15.225 14.24-17.634 26.616-16.648 31.8c3.541 18.401 28.915 30.376 39.065 39.248c-.511.292-.986.548-1.387.767c-5.075 2.519-24.425 12.632-29.245 23.33c-5.476 12.121.877 20.81 5.075 21.978c13.034 3.615 26.433-2.884 33.626-13.618s6.316-24.68 2.993-31.069a.8.8 0 0 0-.146-.219c1.315-.767 2.665-1.57 3.98-2.337a196 196 0 0 1 7.338-4.126c-1.241 3.396-2.154 7.448-2.592 13.29c-.547 6.864 2.264 15.772 5.951 19.277c1.643 1.533 3.578 1.57 4.82 1.57c4.308 0 6.243-3.578 8.397-7.813c2.628-5.185 5.002-11.209 5.002-11.209s-2.958 16.284 5.074 16.284c2.921 0 5.878-3.797 7.193-5.732v.036s.073-.109.219-.365c.292-.475.474-.767.474-.767v-.073c1.169-2.044 3.797-6.681 7.704-14.385c5.038-9.93 9.894-22.343 9.894-22.343s.438 3.03 1.935 8.068c.876 2.958 2.702 6.207 4.162 9.347c-1.168 1.643-1.898 2.555-1.898 2.555l.036.037c-.949 1.241-1.971 2.592-3.103 3.906c-3.98 4.747-8.726 10.187-9.383 11.757c-.767 1.862-.584 3.212.876 4.308c1.059.803 2.957.912 4.892.803c3.578-.256 6.098-1.132 7.339-1.68c1.935-.693 4.199-1.752 6.316-3.322c3.907-2.884 6.28-7.01 6.061-12.45c-.11-2.994-1.096-5.987-2.3-8.799c.365-.511.693-1.022 1.058-1.533c6.171-9.018 10.953-18.912 10.953-18.912s.438 3.03 1.935 8.069c.73 2.555 2.227 5.33 3.542 8.032c-5.805 4.71-9.383 10.186-10.661 13.764c-2.3 6.645-.511 9.638 2.884 10.332c1.534.329 3.724-.401 5.331-1.095c2.044-.657 4.454-1.789 6.754-3.469c3.906-2.884 7.667-6.9 7.448-12.34c-.11-2.482-.767-4.929-1.68-7.302c4.929-2.044 11.282-3.176 19.387-2.227c17.379 2.045 20.811 12.888 20.153 17.452c-.657 4.563-4.308 7.046-5.513 7.813c-1.204.767-1.606 1.022-1.496 1.57c.146.803.73.766 1.752.62c1.424-.255 9.127-3.687 9.456-12.084c.548-10.734-9.675-22.454-27.747-22.344M66.043 184.362c-5.768 6.279-13.8 8.653-17.269 6.645c-3.724-2.155-2.264-11.428 4.82-18.073c4.307-4.052 9.857-7.813 13.544-10.113c.84-.511 2.081-1.241 3.578-2.154c.256-.146.402-.219.402-.219l.876-.548c2.592 9.493.11 17.854-5.95 24.462m41.986-28.551c-2.008 4.893-6.206 17.415-8.762 16.722c-2.19-.585-3.541-10.077-.438-19.46c1.57-4.71 4.892-10.332 6.827-12.523c3.14-3.505 6.608-4.673 7.448-3.249c1.059 1.862-3.833 15.443-5.075 18.51m34.648 16.576c-.84.438-1.643.73-2.008.511c-.256-.146.365-.73.365-.73s4.345-4.674 6.061-6.791c.985-1.242 2.154-2.702 3.395-4.345v.475c0 5.586-5.403 9.346-7.813 10.88m26.725-6.098c-.621-.438-.511-1.898 1.57-6.462c.803-1.789 2.702-4.782 5.951-7.667c.365 1.169.621 2.3.584 3.359c-.036 7.047-5.075 9.675-8.105 10.77"/></g><defs><clipPath id="skillIconsSass0"><path fill="#fff" d="M28 53h200v149.909H28z"/></clipPath></defs></g>`,
	'js' : `<g fill="none"><rect width="256" height="256" fill="#f0db4f" rx="60"/><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g>`,
	'vscode' : `<g fill="none"><rect width="256" height="256" fill="#f4f2ed" rx="60"/><path fill="#2489ca" d="M33.716 100.208s-4.735-3.413.947-7.97l13.236-11.836s3.788-3.985 7.792-.513l122.149 92.479v44.346s-.059 6.964-8.996 6.194z"/><path fill="#1070b3" d="m65.2 128.792l-31.484 28.623s-3.236 2.407 0 6.708l14.617 13.295s3.472 3.729 8.601-.513l33.378-25.309z"/><path fill="#0877b9" d="m120.474 129.029l57.741-44.09l-.375-44.109s-2.466-9.627-10.692-4.616l-76.836 69.931z"/><path fill="#3c99d4" d="M168.844 222.968c3.354 3.432 7.418 2.308 7.418 2.308l44.997-22.173c5.76-3.926 4.951-8.798 4.951-8.798V61.898c0-5.82-5.958-7.831-5.958-7.831l-38.999-18.8c-8.522-5.267-14.105.947-14.105.947s7.18-5.168 10.692 4.616v175.075a8 8 0 0 1-.769 3.453c-1.026 2.071-3.255 4.004-8.601 3.195z"/></g>`,
	'file' : `<path d="M210.78,39.25l-130.25-23A16,16,0,0,0,62,29.23l-29.75,169a16,16,0,0,0,13,18.53l130.25,23h0a16,16,0,0,0,18.54-13l29.75-169A16,16,0,0,0,210.78,39.25ZM178.26,224h0L48,201,77.75,32,208,55ZM89.34,58.42a8,8,0,0,1,9.27-6.48l83,14.65a8,8,0,0,1-1.39,15.88,8.36,8.36,0,0,1-1.4-.12l-83-14.66A8,8,0,0,1,89.34,58.42ZM83.8,89.94a8,8,0,0,1,9.27-6.49l83,14.66A8,8,0,0,1,174.67,114a7.55,7.55,0,0,1-1.41-.13l-83-14.65A8,8,0,0,1,83.8,89.94Zm-5.55,31.51A8,8,0,0,1,87.52,115L129,122.29a8,8,0,0,1-1.38,15.88,8.27,8.27,0,0,1-1.4-.12l-41.5-7.33A8,8,0,0,1,78.25,121.45Z"></path>`,
	'link' : `<path d="M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,16,.45A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z"></path>`,
	'astro' : `<g fill="none"><rect width="256" height="256" fill="url(#skillIconsAstro0)" rx="60"/><path fill="#31274a" fill-rule="evenodd" d="M157.719 33.011c1.634 2.028 2.466 4.765 4.132 10.237l36.396 119.561a151.5 151.5 0 0 0-43.513-14.732l-23.697-80.08a3.086 3.086 0 0 0-4.809-1.593c-.533.4-.922.962-1.109 1.602l-23.411 80.031A151.5 151.5 0 0 0 58 162.791l36.573-119.57c1.673-5.464 2.507-8.195 4.141-10.219a13.44 13.44 0 0 1 5.449-4.032c2.414-.97 5.27-.97 10.984-.97h26.123c5.721 0 8.581 0 10.997.972a13.45 13.45 0 0 1 5.452 4.04" clip-rule="evenodd"/><path fill="#ff5d01" fill-rule="evenodd" d="M162.074 168.499c-6 5.131-17.976 8.629-31.77 8.629c-16.931 0-31.122-5.271-34.887-12.359c-1.346 4.063-1.648 8.712-1.648 11.683c0 0-.887 14.585 9.257 24.729a9.54 9.54 0 0 1 9.538-9.538c9.028 0 9.018 7.877 9.009 14.268v.57c0 9.7 5.928 18.015 14.359 21.519a19.55 19.55 0 0 1-1.966-8.572c0-9.251 5.432-12.696 11.744-16.698c5.022-3.185 10.602-6.724 14.448-13.824a26.06 26.06 0 0 0 3.145-12.454c0-2.773-.431-5.445-1.229-7.953" clip-rule="evenodd"/><path fill="url(#skillIconsAstro1)" fill-rule="evenodd" d="M162.074 168.499c-6 5.131-17.976 8.629-31.77 8.629c-16.931 0-31.122-5.271-34.887-12.359c-1.346 4.063-1.648 8.712-1.648 11.683c0 0-.887 14.585 9.257 24.729a9.54 9.54 0 0 1 9.538-9.538c9.028 0 9.018 7.877 9.009 14.268v.57c0 9.7 5.928 18.015 14.359 21.519a19.55 19.55 0 0 1-1.966-8.572c0-9.251 5.432-12.696 11.744-16.698c5.022-3.185 10.602-6.724 14.448-13.824a26.06 26.06 0 0 0 3.145-12.454c0-2.773-.431-5.445-1.229-7.953" clip-rule="evenodd"/><defs><linearGradient id="skillIconsAstro0" x1="128" x2="128" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop offset=".193" stop-color="#fcb3b2"/><stop offset="1" stop-color="#c587ee"/></linearGradient><linearGradient id="skillIconsAstro1" x1="189.089" x2="153.565" y1="126.765" y2="201.132" gradientUnits="userSpaceOnUse"><stop stop-color="#ff1639"/><stop offset="1" stop-color="#ff1639" stop-opacity="0"/></linearGradient></defs></g>`,
	
};
