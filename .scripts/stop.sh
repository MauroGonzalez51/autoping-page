#!/bin/bash

# Set the base directories as environment variables
export SUPABASE_DIR="$HOME/Downloads/apps/supabase/docker"
export WORK_DIR="$HOME/dev/web/autoping-page"

# Stop supabase instance
cd "$SUPABASE_DIR"
docker compose down

# Init local PostgreSQL service
sudo systemctl start postgresql.service

# Return to directory
cd "$WORK_DIR"