#!/bin/bash
# DEPLOY
# Usage:
#  $ ./bin/deploy.sh

grunt

appcfg.py -A congregacao-jambeiro update dist/
appcfg.py -A congregacao-vila-cury update dist/
appcfg.py -A congregacao-vila-real update dist/