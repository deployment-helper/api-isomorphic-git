#!/bin/bash
app_yaml="# Auto generated file\n
runtime: $runtime\n
instance_class: $instance_class\n
automatic_scaling:\n
    \tmin_instances: $min_instances\n
    \tmax_instances: $max_instances\n
    \tmax_concurrent_requests: $max_concurrent_requests\n
env_variables:\n
    \tDATABASE_NAME: $DATABASE_NAME\n
    \tDB_CONNECTION_STRING: $1\n
    \tDEBUG: $DEBUG\n
"
echo $app_yaml > "app.yaml"