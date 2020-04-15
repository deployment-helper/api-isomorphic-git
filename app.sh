#!/bin/bash
app_yaml="# Auto generated file\n
runtime: $RUNTIME\n
instance_class: $INSTANCE_CLASS\n
automatic_scaling:\n
    \tmin_instances: $MIN_INSTANCES\n
    \tmax_instances: $MAX_INSTANCES\n
    \tmax_concurrent_requests: $MAX_CONCURRENT_REQUESTS\n
env_variables:\n
    \tDATABASE_NAME: $DATABASE_NAME\n
    \tDB_CONNECTION_STRING: $1\n
    \tDEBUG: $DEBUG\n
"
echo $app_yaml > "$BUILD_ARTIFACTSTAGINGDIRECTORY/dist/dist/app.yaml"