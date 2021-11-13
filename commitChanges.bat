@echo off
echo Pulling..
git pull
echo Adding files
git add .
echo Creating commit
git commit -a
echo Pushing
git push origin main