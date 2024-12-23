#!/bin/bash

# Set base directories as environment variables
export SUPABASE_DIR="$HOME/Downloads/apps/supabase/docker"
export WORK_DIR="$HOME/dev/web/autoping-page"

# Stop local PostgreSQL service
sudo systemctl stop postgresql.service

# Navigate and start Supabase
cd "$SUPABASE_DIR"
docker compose up -d

# Return to directory
cd "$WORK_DIR"