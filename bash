# Create folder structure
mkdir -p multi-games-site/games/{tic-tac-toe,snake,memory-game,pong}

# Initialize git
cd multi-games-site
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub and push
git remote add origin https://github.com/YOUR-USERNAME/multi-games-site.git
git branch -M main
git push -u origin main
