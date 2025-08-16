#!/bin/bash

# 設定變數
MSG=${1:-"Update site"}  # 預設 commit 訊息
BRANCH="gh-pages"  # 你要 push 的分支

echo "🚀 開始部署 Hugo 網站..."

# 生成靜態文件
hugo

# 進入 public 資料夾並推送到 GitHub
cd public
git add .
git commit -m "$MSG"
git push origin $BRANCH

# 返回上層目錄
cd ..

echo "✅ Hugo 網站已成功部署！"
