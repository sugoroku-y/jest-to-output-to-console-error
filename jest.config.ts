import type { Config } from 'jest';

export default {
    projects: [
        // �ʏ��jest�ł̃e�X�g
        {
            displayName: 'test',
            transform: {
                '\\.ts$': [
                    'ts-jest',
                    {
                        tsconfig: 'tests/tsconfig.json',
                    },
                ],
            },
            collectCoverageFrom: ['src/**/*.ts'],
            setupFilesAfterEnv: ['./tests/setupTests.ts'],
        },
        ...(process.env['npm_config_lint']
            ? // npm test --lint�Ŏ��s����ƈȉ����ǉ��Ńe�X�g����
              [
                  // eslint�ł̃`�F�b�N
                  {
                      displayName: 'eslint',
                      runner: 'eslint',
                      testMatch: ['**/*.ts', '**/*.js', '**/*.mjs', '**/*.cjs'],
                  },
                  // prettier�Ő��`���č��ق��Ȃ����`�F�b�N
                  { preset: '@sugoroku-y/jest-runner-prettier' },
              ]
            : []),
    ],
    collectCoverage: !!process.env['npm_config_coverage'],
} satisfies Config;
