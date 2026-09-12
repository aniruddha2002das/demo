module.exports = {
  apps: [
    {
      name: "demo",       // The name of your app in PM2
      script: "./server.js",     // Your main entry file
      instances: "max",          // Number of instances to run (use 'max' for clustering)
      exec_mode: "cluster", 
      autorestart: true,         // Restart if it crashes
      watch: false,              // Don't restart on file changes in production
      max_memory_restart: "1G",  // Restart if it uses more than 1GB of RAM
      env: {
        NODE_ENV: "development",
        PORT: 3000,
        APP_ID: 1111
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
        APP_ID: 1111
      }
    }
  ]
};