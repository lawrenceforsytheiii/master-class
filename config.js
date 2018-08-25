/*
 * Create and export configuration variables
 *
 */

 // Container for all the environments
 const environments = {};

 // Staging (default) environment
 environments.staging = {
   'httpPort' : 3000,
   'httpsPort' : 3001,
   'envName' : 'staging'
 };

 // Production environment
 environments.production = {
   'httpPort' : 5000,
   'httpsPort' : 5001,
   'envName' : 'production'
 };

 // Determine which environment was passed as a command-line argument
 const currentEnviroment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

 // Check that the current environment is one of the environments above, if not, default to staging
 const environmentToExport = typeof(environments[currentEnviroment]) == 'object' ? environments[currentEnviroment] : environments.staging;

 // Export the module
 module.exports = environmentToExport;
