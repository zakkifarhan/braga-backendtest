# Braga Technologies - Backend Test
# M. Farhan Muzakki

## Manual Installation

If you would still prefer to do the installation manually, follow these steps:

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

run migration
```bash
npx sequelize db:migrate
```
run seeder
```bash
npx sequelize db:seed:all
```
reset cache
```bash
npm run clear:cache
```

## Commands
Running:

```bash
npm run start
```

## API Documentation
```bash
https://www.getpostman.com/collections/4fac74a17923e8b0630f
```
