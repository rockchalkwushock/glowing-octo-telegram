/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_TEMP_ENV_VAR: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
