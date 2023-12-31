import { config } from 'dotenv';

config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const env = (key, defaultValue = null) => process.env[key] || defaultValue;
const possibleEnvs = ['production', 'development', 'test'];
const currentEnv = env('NODE_ENV');

if (!possibleEnvs.includes(currentEnv)) {
    console.error(
        `\x1b[31m NODE_ENV has wrong option. Possible NODE_ENV options are : \x1b[32m ${possibleEnvs} \x1b[31m . Currently NODE_ENV is \x1b[33m ${currentEnv} \x1b[0m`
    );

    console.table({
        possibleEnvs,
        currentEnv
    });

    process.exit();
}

export const conf = {
    info: {
        name: env('npm_package_name'),
        version: env('npm_package_version'),
        description: env('npm_package_description'),
        host: env('APP_BASEURL')
    },
    api: {
        prefix: env('API_PREFIX', 'api')
    },
    app: {
        env: env('NODE_ENV'),
        serverPort: parseInt(env('PORT', 3000)),
        frontendUrl: env('APP_FRONTEND_URL')
    },
    db: {
        url:
            env('DATABASE_DIALECT', 'mysql') +
            '://' +
            env('DATABASE_USERNAME', 'guest') +
            ':' +
            env('DATABASE_PASSWORD', 'guest') +
            '@' +
            env('DATABASE_HOST', 'localhost') +
            ':' +
            env('DATABASE_PORT', 3306) +
            '/' +
            env('DATABASE_NAME', 'db'),
        host: env('DATABASE_HOST', 'localhost'),
        name: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        dialect: env('DATABASE_DIALECT', 'mysql'),
        port: parseInt(env('DATABASE_PORT', 3306)),
        define: {
            charset: 'utf8mb4',
            collate: 'utf8mb4_unicode_ci',
            timestamps: true
        }
    }
};

export default () => {
    return conf;
};
