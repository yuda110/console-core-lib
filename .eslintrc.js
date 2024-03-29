module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    "plugin:@typescript-eslint/recommended",
  ],

  rules: {
    "max-len": ["error", { code: 200 }],
    indent: ["error", 4],
    "prefer-destructuring": ["error", { object: false, array: false }],
    radix: ["error", "as-needed"],
    "no-prototype-builtins": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    camelcase: ["error", {
        properties: "always",
        allow: [
          "domain_id",
          "user_id",
          "server_id",
          "item_type",
          "region_id",
          "collector_id",
          "plugin_info",
          "plugin_id",
          "schedule_id",
          "project_id",
          "resource_group",
          "resource_group_id",
          "source_type",
          "source_format",
          "secret_id",
          "secret_group_id",
          "secret_type",
          "created_at",
          "last_collected_at",
          "change_key",
          "object_key",
          "filter_format",
          "collect_mode",
          "service_type",
          "repository_id",
          "translation_id",
          "key_path",
          "root_path",
          "exclude_type",
          "item_id",
          "include_provider",
          "project_group_id",
          "has_child",
          "service_account_id",
          "resource_id",
          "role_id",
          "role_binding_id",
          "data_source",
          "project_group_info",
          "parent_group_id",
          "has_permission",
          "include_permission",
          "check_child",
          "author_within",
          "total_count",
          "maintenance_window_id"
        ]
      }
    ],
    "no-this-before-super": ["off"],
    "no-useless-constructor": ["off"],
    "no-empty-function": ["error", { allow: ["constructors", "arrowFunctions"] }],
    "no-param-reassign": ["error", { props: false }],
    "no-underscore-dangle": ["off"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "import/prefer-default-export": ["off"],
    "no-new": ["off"],
    "prefer-template": ["error"],
    "no-plusplus": ["off"],
    "no-tabs": ["off"],

    // typescript rules
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "no-public",
        overrides: {
          accessors: "no-public",
          methods: "no-public",
          properties: "no-public",
          parameterProperties: "explicit"
        }
      }
    ],
    "@typescript-eslint/no-object-literal-type-assertion": ["off"],
    "@typescript-eslint/no-parameter-properties": [
      "error",
      { allows: ["protected", "public"] }
    ],
    "@typescript-eslint/camelcase": ["off"], // use eslint camelcase rule
    "@typescript-eslint/no-empty-function": ["off"], // use eslint no-empty-function rule
    "@typescript-eslint/no-use-before-define": ["off"], // use eslint no-use-before-define rule
    "@typescript-eslint/ban-ts-ignore": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["off"]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2018
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};
