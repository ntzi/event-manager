export default {
    extensions: {
        "ts": "module"
    },
    nodeArguments: [
        "--loader=ts-node/esm"
    ],
    files: ['__tests__/**/*.test.ts', '!test/**/{fixtures,helpers}/**'],
    ignoredByWatcher: ['{coverage,docs,media,test-types,test-tap}/**'],
    environmentVariables: {
        AVA_FAKE_SCM_ROOT: '.fake-root', // This is an internal test flag.
    },
};