console.log(`# Auto generated file
runtime: ${process.env.runtime || 'nodejs12'}
instance_class: ${process.env.instance_class || 'F1'}
automatic_scaling: 
    min_instances: ${process.env.min_instances || 1}
    max_instances: ${process.env.max_instances || 1}
    max_concurrent_requests: ${process.env.max_concurrent_requests || 50}
env_variables:
    DATABASE_NAME: ${process.env.DATABASE_NAME}
    DB_CONNECTION_STRING: ${process.env.DB_CONNECTION_STRING}
`);