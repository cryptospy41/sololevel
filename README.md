# Solo Leveling RPG - Personal Development System

A static web application inspired by Solo Leveling that transforms your self-improvement journey into an engaging RPG experience with character progression, quests, and achievements.

## Features

- **Character Progression**: Level up and allocate stat points (STR, VIT, INT, PER, AGI, CMD)
- **Daily Quests**: Complete daily fitness and development tasks
- **Custom Quests**: Create your own goals with different difficulty levels
- **Skills System**: Track and level up various life skills
- **Seven Deadly Sins**: Alternative progression path with sin quests
- **Achievements**: Unlock achievements for various milestones
- **Local Storage**: All data is saved locally in your browser

## Getting Started

### Option 1: Open Directly in Browser
1. Download all files (index.html, styles.css, app.js, README.md)
2. Double-click `index.html` to open in your web browser
3. Start your journey as an E-Rank Hunter!

### Option 2: Use with VS Code Live Server
1. Download all files to a folder
2. Open the folder in Visual Studio Code
3. Install the "Live Server" extension if you haven't already
4. Right-click on `index.html` and select "Open with Live Server"
5. The app will open in your browser with live reload functionality

### Option 3: Deploy to GitHub Pages
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch" and choose "main" branch
5. Your app will be available at `https://yourusername.github.io/repository-name`

## How to Use

### Navigation
- Use the bottom navigation bar (mobile) or top navigation bar (desktop)
- Navigate between Status, Quests, Skills, Sin Command, and Achievements

### Status Page
- View your character information, level, and stats
- Allocate available points to increase your stats
- Monitor your HP, MP, and experience progress

### Quests Page
- **Daily Quests**: Complete daily fitness tasks (push-ups, sit-ups, squats, running)
- **Custom Quests**: Create your own goals with:
  - Easy (1.0x reward)
  - Medium (1.5x reward)
  - Hard (2.0x reward)
  - Extreme (3.0x reward)
- Track progress and earn experience points

### Skills Page
- Create and track various life skills
- Categories include: Combat, Magic, Support, Crafting, Social, Intellectual
- Practice skills to increase proficiency and level up

### Sin Command Page
- Track your progression in the Seven Deadly Sins
- Create sin quests for alternative character development
- Gain sin points and unlock sin powers

### Achievements Page
- View all available achievements
- Track your completion progress
- Unlock achievements for various milestones

## Data Storage

All your progress is automatically saved to your browser's local storage. This means:
- Your data persists between sessions
- No internet connection required after initial load
- Data is private and stored only on your device
- You can export/backup by copying the localStorage data

## Daily Reset

Daily quests automatically reset at midnight local time. Make sure to complete them before the timer runs out!

## Browser Compatibility

This app works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile browsers on iOS and Android
- Works offline after initial load

## Tips for Best Experience

1. **Daily Consistency**: Check in daily to complete your daily quests
2. **Set Realistic Goals**: Start with achievable custom quests
3. **Track Real Activities**: Use the quest system to track actual self-improvement activities
4. **Balance Progression**: Don't forget about skills and achievements alongside quests
5. **Regular Backups**: Occasionally export your data to prevent loss

## Customization

You can customize the app by:
- Editing character name in the Status page
- Creating custom quests that match your personal goals
- Adding skills relevant to your interests
- Setting appropriate difficulty levels for challenges

## Troubleshooting

**Data Lost**: Check if you're using the same browser and haven't cleared browser data
**Buttons Not Working**: Make sure JavaScript is enabled in your browser
**Display Issues**: Try refreshing the page or clearing browser cache
**Mobile Issues**: Try rotating your device or using landscape mode

## File Structure

```
solo-leveling-rpg/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── app.js             # JavaScript functionality
└── README.md          # This documentation
```

## License

This is a personal development tool inspired by Solo Leveling. Use it to gamify your self-improvement journey!

---

**Remember**: This is a tool to help motivate real-world self-improvement. The RPG elements should enhance, not replace, actual personal development activities.