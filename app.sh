
app_yaml = "# Auto generated file\n
runtime: $runtime\n
instance_class: $instance_class\n
automatic_scaling:\n
    min_instances: $min_instances\n
    max_instances: $max_instances\n
    max_concurrent_requests: $max_concurrent_requests\n
env_variables:\n
    DATABASE_NAME: $DATABASE_NAME\n
    DB_CONNECTION_STRING: $1\n
    DEBUG: $DEBUG\n
"
echo $app_yaml > app.yaml