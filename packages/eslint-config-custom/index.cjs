module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
		jest: true,
	},
	globals: {
		NodeJS: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		// "plugin:@typescript-eslint/recommended-requiring-type-checking",
		// "plugin:@typescript-eslint/strict",
		"plugin:github/typescript",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"turbo",
		"prettier",
		"plugin:prettier/recommended",
	],
	ignorePatterns: ["node_modules", "build", "dist", "public"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		// Use relative project path to avoid issues with monorepos
		project: ["./tsconfig.json", "./*/tsconfig.json"],
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint",
		"github",
		"json-format",
		"promise",
		"import",
		"prettier",
	],
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				"alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
				// "project": [
				//   "packages/*/tsconfig.json",
				//   "other-packages/*/tsconfig.json"
				// ]
			},
		},
	},
	rules: {
		// ESLint
		"prefer-const": "error",
		eqeqeq: "error",
		"lines-between-class-members": "error",
		curly: "error",
		"no-constant-condition": "error",
		"linebreak-style": ["error", "unix"],
		semi: ["error", "always"],
		"func-style": ["error", "expression"],
		"no-extra-semi": "error",
		"default-case": "error",
		"no-async-promise-executor": "error",
		"no-await-in-loop": "error",
		"no-console": "warn",
		"no-misleading-character-class": "error",
		"no-multi-assign": "error",
		"no-multi-str": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-object": "error",
		"no-new-symbol": "error",
		"no-new-wrappers": "error",
		"no-obj-calls": "error",
		"no-path-concat": "error",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "off",
		"no-sparse-arrays": "error",
		"no-tabs": "error",
		"no-template-curly-in-string": "error",
		"no-this-before-super": "error",
		"no-unreachable-loop": "error",
		'no-unused-vars': "off",
		"prefer-numeric-literals": "error",
		"prefer-object-spread": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"symbol-description": "error",
		"arrow-body-style": ["error", "as-needed"],

		// Import
		"import/no-unresolved": "error",
		"import/no-duplicates": ["error", { considerQueryString: true }],
		"import/default": "error",
		// https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
		"import/named": "off",
		"import/namespace": "off",
		"import/default": "off",
		"import/no-named-as-default-member": "off",
		// "import/extensions": ["error", "ignorePackages"], ONLY ESM


		// typescript-eslint
		"@typescript-eslint/no-shadow": ["error"],
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/method-signature-style": "error",
		// "@typescript-eslint/no-base-to-string": "error",
		"@typescript-eslint/no-confusing-non-null-assertion": "error",
		"@typescript-eslint/no-dynamic-delete": "error",
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		// "@typescript-eslint/no-unnecessary-condition": "error",
		// "@typescript-eslint/no-unnecessary-qualifier": "error",
		// "@typescript-eslint/no-unnecessary-type-arguments": "error",
		"@typescript-eslint/no-unnecessary-type-constraint": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/prefer-includes": "error",
		"@typescript-eslint/prefer-nullish-coalescing": "error",
		"@typescript-eslint/prefer-optional-chain": "error",
		"@typescript-eslint/prefer-readonly": "error",
		"@typescript-eslint/prefer-string-starts-ends-with": "error",
		"@typescript-eslint/prefer-ts-expect-error": "error",
		// "@typescript-eslint/promise-function-async": "error",
		"@typescript-eslint/require-array-sort-compare": "error",
		"@typescript-eslint/sort-type-union-intersection-members": "error",
		"@typescript-eslint/switch-exhaustiveness-check": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/unified-signatures": "error",
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/brace-style": "error",
		"@typescript-eslint/consistent-type-exports": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
		"@typescript-eslint/default-param-last": "error",

		// Github
		"filenames/match-regex": 0,
		"github/no-then": 0,

		// Prettier
		"prettier/prettier": "error",
	},
};
