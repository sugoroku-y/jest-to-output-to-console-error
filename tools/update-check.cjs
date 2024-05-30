const { spawnSync } = require('child_process');

const result = spawnSync('npm', ['update'], {
    encoding: 'utf8',
    stdio: 'inherit',
    shell: true,
});
if (result.status !== 0) {
    if (result.error) {
        console.error(result.error);
    }
    process.exit(result.status);
}

/** @type {{dependencies: Record<string, string>; devDependencies: Record<string, string>}} */
const packageJson = require('../package.json');
/** @type {{packages: Record<string, {version: string}>}} */
const packageLockJson = require('../package-lock.json');

const { dependencies, devDependencies } = packageJson;
const { packages } = packageLockJson;

for (const [name, versionSpec] of [
    ...(dependencies ? Object.entries(dependencies) : []),
    ...(devDependencies ? Object.entries(devDependencies) : []),
]) {
    if (versionSpec.startsWith('github:')) {
        continue;
    }
    const version = packages[`node_modules/${name}`].version;
    if (versionSpec.replace(/^\^/, '') === version) {
        continue;
    }

    console.log(`${name}: ${versionSpec} -> ${version}`);
}
