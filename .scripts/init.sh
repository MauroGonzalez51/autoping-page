#!/bin/bash

sudo systemctl stop postgresql.service
cd ~/Downloads/apps/supabase/docker
docker compose up -d
cd ~/dev/web/autoping-page