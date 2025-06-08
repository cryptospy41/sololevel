// Game Data Storage Class
class GameData {
    constructor() {
        this.character = {
            id: 1,
            name: "ABHAY SINGH",
            job: "OBSERVER",
            level: 1,
            exp: 0,
            expToNext: 100,
            hp: 100,
            mp: 50,
            str: 09,
            vit: 12,
            int: 15,
            per: 11,
            agi: 05,
            cmd: 06,
            strGained: 0,
            vitGained: 0,
            intGained: 0,
            perGained: 0,
            agiGained: 0,
            cmdGained: 0,
            availablePoints: 5,
            specialPoints: 1
        };

        this.dailyQuests = [
            {
                id: 1,
                questType: 'pushups',
                name: 'Push-ups',
                target: 100,
                current: 0,
                completed: false,
                reward: '1 STR'
            },
            {
                id: 2,
                questType: 'situps',
                name: 'Sit-ups',
                target: 100,
                current: 0,
                completed: false,
                reward: '1 VIT'
            },
            {
                id: 3,
                questType: 'squats',
                name: 'Squats',
                target: 100,
                current: 0,
                completed: false,
                reward: '1 AGI'
            },
            {
                id: 4,
                questType: 'run',
                name: 'Running (km)',
                target: 10,
                current: 0,
                completed: false,
                reward: '1 PER'
            }
        ];

        this.customQuests = [];
        this.sinQuests = [];
        this.skills = [
            { id: 1, characterId: 1, name: "Observation", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-eye" },
            { id: 2, characterId: 1, name: "Aura", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-circle" },
            { id: 3, characterId: 1, name: "Charm", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-heart" },
            { id: 4, characterId: 1, name: "Pain Tolerance", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-shield-alt" },
            { id: 5, characterId: 1, name: "Focus", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-bullseye" },
            { id: 6, characterId: 1, name: "Endurance", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-running" }
        ];
        this.achievements = [];
        
        this.sins = [
            {
                id: 1,
                name: 'Pride',
                level: 1,
                points: 0,
                maxPoints: 100,
                power: 0,
                icon: '👑',
                color: 'pride'
            },
            {
                id: 2,
                name: 'Greed',
                level: 1,
                points: 0,
                maxPoints: 100,
                power: 0,
                icon: '💰',
                color: 'greed'
            },
            {
                id: 3,
                name: 'Lust',
                level: 1,
                points: 0,
                maxPoints: 100,
                power: 0,
                icon: '💋',
                color: 'lust'
            },
            {
                id: 4,
                name: 'Envy',
                level: 1,
                points: 0,
                maxPoints: 100,
                power: 0,
                icon: '👁️',
                color: 'envy'
            },
            {
                id: 5,
                name: 'Gluttony',
                level: 1,
                points: 0,
                maxPoints: 100,
                power: 0,
                icon: '🍖',
                color: 'gluttony'
            },
            {
                id: 6,
                name: 'Wrath',
                level: 1,
                points: 0,
                maxPoints: 100,
                power: 0,
                icon: '⚡',
                color: 'wrath'
            },
            {
                id: 7,
                name: 'Sloth',
                level: 1,
                points: 0,
                maxPoints: 100,
                power: 0,
                icon: '😴',
                color: 'sloth'
            }
        ];

        this.nextQuestId = 5;
        this.nextSkillId = 7;
        this.nextAchievementId = 1;
        this.nextSinQuestId = 1;
        this.lastDailyReset = new Date().toDateString();

        this.loadData();
        this.ensureDefaultSkills();
        this.initializeAchievements();
    }

    // Ensure default skills are always present
    ensureDefaultSkills() {
        const defaultSkills = [
            { id: 1, characterId: 1, name: "Observation", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-eye" },
            { id: 2, characterId: 1, name: "Aura", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-circle" },
            { id: 3, characterId: 1, name: "Charm", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-heart" },
            { id: 4, characterId: 1, name: "Pain Tolerance", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-shield-alt" },
            { id: 5, characterId: 1, name: "Focus", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-bullseye" },
            { id: 6, characterId: 1, name: "Endurance", category: "daily", level: 1, proficiency: 0, maxProficiency: 100, icon: "fas fa-running" }
        ];

        // Add missing default skills
        defaultSkills.forEach(defaultSkill => {
            const existing = this.skills.find(s => s.name === defaultSkill.name);
            if (!existing) {
                this.skills.push({ ...defaultSkill });
            }
        });

        // Update nextSkillId to be higher than existing skills
        if (this.skills.length > 0) {
            this.nextSkillId = Math.max(...this.skills.map(s => s.id)) + 1;
        }
    }

    // Save data to localStorage
    saveData() {
        const gameState = {
            character: this.character,
            dailyQuests: this.dailyQuests,
            customQuests: this.customQuests,
            sinQuests: this.sinQuests,
            skills: this.skills,
            achievements: this.achievements,
            sins: this.sins,
            nextQuestId: this.nextQuestId,
            nextSkillId: this.nextSkillId,
            nextAchievementId: this.nextAchievementId,
            nextSinQuestId: this.nextSinQuestId,
            lastDailyReset: this.lastDailyReset
        };
        localStorage.setItem('soloLevelingRPG', JSON.stringify(gameState));
    }

    // Load data from localStorage
    loadData() {
        const saved = localStorage.getItem('soloLevelingRPG');
        if (saved) {
            try {
                const gameState = JSON.parse(saved);
                this.character = { ...this.character, ...gameState.character };
                this.dailyQuests = gameState.dailyQuests || this.dailyQuests;
                this.customQuests = gameState.customQuests || [];
                this.sinQuests = gameState.sinQuests || [];
                this.skills = gameState.skills || this.skills;
                this.achievements = gameState.achievements || [];
                this.sins = gameState.sins || this.sins;
                this.nextQuestId = gameState.nextQuestId || 5;
                this.nextSkillId = gameState.nextSkillId || 1;
                this.nextAchievementId = gameState.nextAchievementId || 1;
                this.nextSinQuestId = gameState.nextSinQuestId || 1;
                this.lastDailyReset = gameState.lastDailyReset || new Date().toDateString();
                
                this.checkDailyReset();
            } catch (e) {
                console.error('Error loading saved data:', e);
            }
        }
    }

    // Check if daily quests need to be reset
    checkDailyReset() {
        const today = new Date().toDateString();
        if (this.lastDailyReset !== today) {
            this.resetDailyQuests();
            this.lastDailyReset = today;
            this.saveData();
        }
    }

    // Reset daily quests
    resetDailyQuests() {
        this.dailyQuests.forEach(quest => {
            quest.current = 0;
            quest.completed = false;
        });
        showToast('Daily Reset', 'Daily quests have been reset!', 'info');
    }

    // Calculate rank based on total stats
    calculateRank(totalStats) {
        if (totalStats >= 500) return "S RANK HUNTER";
        if (totalStats >= 400) return "A RANK HUNTER";
        if (totalStats >= 300) return "B RANK HUNTER";
        if (totalStats >= 200) return "C RANK HUNTER";
        if (totalStats >= 100) return "D RANK HUNTER";
        return "E RANK HUNTER";
    }

    // Get job by level
    getJobByLevel(level) {
        if (level >= 50) return "SHADOW MONARCH";
        if (level >= 40) return "NATIONAL LEVEL HUNTER";
        if (level >= 30) return "S RANK HUNTER";
        if (level >= 20) return "A RANK HUNTER";
        if (level >= 15) return "B RANK HUNTER";
        if (level >= 10) return "C RANK HUNTER";
        if (level >= 5) return "D RANK HUNTER";
        return "E RANK HUNTER";
    }

    // Add experience points
    addExp(amount) {
        this.character.exp += amount;
        
        while (this.character.exp >= this.character.expToNext) {
            this.levelUp();
        }
        
        this.saveData();
        updateStatusPage();
    }

    // Level up character
    levelUp() {
        this.character.exp -= this.character.expToNext;
        this.character.level += 1;
        this.character.expToNext = this.character.level * 100;
        this.character.availablePoints += 3;
        this.character.specialPoints += 1;
        this.character.hp += 10;
        this.character.mp += 5;
        this.character.job = this.getJobByLevel(this.character.level);
        
        showToast('Level Up!', `Congratulations! You reached level ${this.character.level}!`, 'success');
        
        // Check for level achievements
        this.addAchievement({
            name: `Level ${this.character.level} Reached`,
            description: `Reached character level ${this.character.level}`,
            type: 'level',
            target: this.character.level,
            progress: this.character.level
        });
    }

    // Add achievement
    addAchievement(achievement) {
        const existing = this.achievements.find(a => a.name === achievement.name);
        if (!existing) {
            const newAchievement = {
                id: this.nextAchievementId++,
                ...achievement,
                completed: achievement.progress >= achievement.target,
                dateEarned: achievement.progress >= achievement.target ? new Date().toISOString() : null
            };
            this.achievements.push(newAchievement);
            
            if (newAchievement.completed) {
                showToast('Achievement Unlocked!', newAchievement.name, 'success');
            }
            
            this.saveData();
        }
    }

    // Initialize default achievements
    initializeAchievements() {
        const defaultAchievements = [
            { name: 'First Steps', description: 'Complete your first daily quest', type: 'quest', target: 1, progress: 0 },
            { name: 'Dedicated Trainee', description: 'Complete 10 daily quests', type: 'quest', target: 10, progress: 0 },
            { name: 'Quest Master', description: 'Complete 50 daily quests', type: 'quest', target: 50, progress: 0 },
            { name: 'Skill Learner', description: 'Create your first skill', type: 'skill', target: 1, progress: 0 },
            { name: 'Skill Expert', description: 'Reach level 10 with any skill', type: 'skill', target: 10, progress: 0 },
            { name: 'Sin Explorer', description: 'Complete your first sin quest', type: 'sin', target: 1, progress: 0 },
            { name: 'Power Seeker', description: 'Gain 100 points in any sin', type: 'sin', target: 100, progress: 0 }
        ];

        defaultAchievements.forEach(achievement => {
            if (!this.achievements.find(a => a.name === achievement.name)) {
                this.addAchievement(achievement);
            }
        });
    }

    // Add sin points
    addSinPoints(sinName, points) {
        const sin = this.sins.find(s => s.name === sinName);
        if (sin) {
            sin.points += points;
            
            while (sin.points >= sin.maxPoints) {
                sin.points -= sin.maxPoints;
                sin.level += 1;
                sin.maxPoints = sin.level * 100;
                sin.power += 10;
                
                showToast('Sin Level Up!', `${sin.name} reached level ${sin.level}!`, 'warning');
            }
            
            // Update sin achievements
            const achievement = this.achievements.find(a => a.type === 'sin' && a.target === 100);
            if (achievement && sin.points + (sin.level - 1) * 100 >= 100) {
                achievement.progress = Math.max(achievement.progress, sin.points + (sin.level - 1) * 100);
                if (!achievement.completed && achievement.progress >= achievement.target) {
                    achievement.completed = true;
                    achievement.dateEarned = new Date().toISOString();
                    showToast('Achievement Unlocked!', achievement.name, 'success');
                }
            }
            
            this.saveData();
        }
    }
}

// Initialize game data
const gameData = new GameData();

// Navigation functionality
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetPage = button.dataset.page;
            
            // Remove active class from all buttons and pages
            navButtons.forEach(btn => btn.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            // Add active class to clicked button and corresponding page
            button.classList.add('active');
            const targetPageElement = document.getElementById(`${targetPage}-page`);
            if (targetPageElement) {
                targetPageElement.classList.add('active');
                refreshPage(targetPage);
            }
        });
    });
}

// Refresh page content
function refreshPage(pageType) {
    switch(pageType) {
        case 'status':
            updateStatusPage();
            break;
        case 'quests':
            updateQuestsPage();
            break;
        case 'skills':
            updateSkillsPage();
            break;
        case 'sins':
            updateSinsPage();
            break;
        case 'achievements':
            updateAchievementsPage();
            break;
    }
}

// Update status page
function updateStatusPage() {
    const character = gameData.character;
    
    document.getElementById('character-name').textContent = character.name;
    document.getElementById('character-job').textContent = character.job;
    document.getElementById('character-rank').textContent = gameData.calculateRank(
        character.str + character.vit + character.int + character.per + character.agi + character.cmd
    );
    document.getElementById('character-level').textContent = character.level;
    document.getElementById('character-hp').textContent = character.hp;
    document.getElementById('character-mp').textContent = character.mp;
    
    // Update EXP bar
    const expPercentage = (character.exp / character.expToNext) * 100;
    document.getElementById('exp-display').textContent = `${character.exp} / ${character.expToNext}`;
    document.getElementById('exp-fill').style.width = `${expPercentage}%`;
    
    // Update stats
    const stats = ['str', 'vit', 'int', 'per', 'agi', 'cmd'];
    stats.forEach(stat => {
        document.getElementById(`stat-${stat}`).textContent = character[stat].toString().padStart(3, '0');
        document.getElementById(`${stat}-gained`).textContent = `(+${character[stat + 'Gained']})`;
    });
    
    // Update totals
    const totalStats = character.str + character.vit + character.int + character.per + character.agi + character.cmd;
    document.getElementById('total-stats').textContent = totalStats;
    document.getElementById('available-points').textContent = character.availablePoints;
    document.getElementById('special-points').textContent = character.specialPoints;
    
    // Update stat buttons
    document.querySelectorAll('.stat-button').forEach(button => {
        const stat = button.dataset.stat;
        const isSpecialStat = ['per', 'agi', 'cmd'].includes(stat);
        const hasPoints = isSpecialStat ? character.specialPoints > 0 : character.availablePoints > 0;
        button.disabled = !hasPoints;
    });
}

// Add stat points
function addStat(statType) {
    const character = gameData.character;
    const isSpecialStat = ['per', 'agi', 'cmd'].includes(statType);
    
    if (isSpecialStat && character.specialPoints > 0) {
        character[statType] += 1;
        character[statType + 'Gained'] += 1;
        character.specialPoints -= 1;
        
        if (statType === 'per') character.mp += 2;
        if (statType === 'agi') character.hp += 1;
        if (statType === 'cmd') character.mp += 1;
        
    } else if (!isSpecialStat && character.availablePoints > 0) {
        character[statType] += 1;
        character[statType + 'Gained'] += 1;
        character.availablePoints -= 1;
        
        if (statType === 'str') character.hp += 2;
        if (statType === 'vit') character.hp += 3;
        if (statType === 'int') character.mp += 3;
    }
    
    gameData.saveData();
    updateStatusPage();
    showToast('Stat Increased!', `${statType.toUpperCase()} increased by 1!`, 'success');
}

// Update quests page
function updateQuestsPage() {
    updateDailyQuests();
    updateCustomQuests();
    updateDailyTimer();
}

// Update daily quests
function updateDailyQuests() {
    const container = document.getElementById('daily-quests');
    container.innerHTML = '';
    
    gameData.dailyQuests.forEach(quest => {
        const questElement = createDailyQuestElement(quest);
        container.appendChild(questElement);
    });
}

// Create daily quest element
function createDailyQuestElement(quest) {
    const div = document.createElement('div');
    div.className = 'quest-item';
    div.innerHTML = `
        <div class="quest-info">
            <div class="quest-name">${quest.name}</div>
            <div class="quest-progress">${quest.current} / ${quest.target}</div>
        </div>
        <div class="quest-controls">
            <div class="quest-progress">${quest.reward}</div>
            <button class="quest-button" onclick="updateDailyQuest(${quest.id}, 1)" ${quest.completed ? 'disabled' : ''}>
                ${quest.completed ? 'COMPLETED' : '+1'}
            </button>
        </div>
    `;
    
    if (quest.completed) {
        div.style.opacity = '0.6';
    }
    
    return div;
}

// Update daily quest progress
function updateDailyQuest(questId, amount) {
    const quest = gameData.dailyQuests.find(q => q.id === questId);
    if (quest && !quest.completed) {
        quest.current = Math.min(quest.current + amount, quest.target);
        
        if (quest.current >= quest.target) {
            completeDailyQuest(questId);
        } else {
            gameData.saveData();
            updateDailyQuests();
        }
    }
}

// Complete daily quest
function completeDailyQuest(questId) {
    const quest = gameData.dailyQuests.find(q => q.id === questId);
    if (quest && !quest.completed) {
        quest.completed = true;
        quest.current = quest.target;
        
        // Award rewards
        const expGain = 50;
        gameData.addExp(expGain);
        
        // Award stat increase based on quest type
        const character = gameData.character;
        switch(quest.questType) {
            case 'pushups':
                character.str += 1;
                character.strGained += 1;
                character.hp += 2;
                break;
            case 'situps':
                character.vit += 1;
                character.vitGained += 1;
                character.hp += 3;
                break;
            case 'squats':
                character.agi += 1;
                character.agiGained += 1;
                character.hp += 1;
                break;
            case 'run':
                character.per += 1;
                character.perGained += 1;
                character.mp += 2;
                break;
        }
        
        // Update quest achievements
        const questAchievements = gameData.achievements.filter(a => a.type === 'quest');
        questAchievements.forEach(achievement => {
            if (!achievement.completed) {
                achievement.progress += 1;
                if (achievement.progress >= achievement.target) {
                    achievement.completed = true;
                    achievement.dateEarned = new Date().toISOString();
                    showToast('Achievement Unlocked!', achievement.name, 'success');
                }
            }
        });
        
        gameData.saveData();
        updateDailyQuests();
        updateStatusPage();
        showToast('Quest Complete!', `${quest.name} completed! Gained ${expGain} EXP and ${quest.reward}`, 'success');
    }
}

// Update custom quests
function updateCustomQuests() {
    const container = document.getElementById('custom-quests');
    const questsContainer = document.getElementById('custom-quests-container');
    
    if (gameData.customQuests.length === 0) {
        questsContainer.style.display = 'none';
        return;
    }
    
    questsContainer.style.display = 'block';
    container.innerHTML = '';
    
    // Check for expired quests
    const now = new Date();
    gameData.customQuests.forEach(quest => {
        if (!quest.completed && new Date(quest.expiresAt) <= now) {
            quest.expired = true;
        }
    });
    
    gameData.customQuests.forEach(quest => {
        const questElement = createCustomQuestElement(quest);
        container.appendChild(questElement);
    });
}

// Create custom quest element
function createCustomQuestElement(quest) {
    const div = document.createElement('div');
    div.className = 'quest-item';
    
    const difficultyClass = getDifficultyClass(quest.difficulty);
    const rewardMultiplier = getRewardMultiplier(quest.difficulty);
    const timeRemaining = formatTimeRemaining(quest);
    const isExpired = quest.expired || new Date(quest.expiresAt) <= new Date();
    
    div.innerHTML = `
        <div class="quest-info">
            <div class="quest-name">${quest.name}</div>
            <div class="quest-description">${quest.description}</div>
            <div class="quest-progress">${quest.current} / ${quest.target}</div>
            ${isExpired ? '<div class="timer-remaining" style="color: #ef4444;">EXPIRED</div>' : `<div class="timer-remaining">${timeRemaining}</div>`}
        </div>
        <div class="quest-controls">
            <div class="difficulty-badge ${difficultyClass}">${quest.difficulty}</div>
            <div style="display: flex; gap: 0.5rem;">
                <button class="quest-button" onclick="updateCustomQuestProgress(${quest.id}, 1)" ${quest.completed || isExpired ? 'disabled' : ''}>
                    ${quest.completed ? 'COMPLETED' : isExpired ? 'EXPIRED' : '+1'}
                </button>
                <button class="quest-button" onclick="deleteCustomQuest(${quest.id})" style="background: #ef4444;">
                    DELETE
                </button>
            </div>
        </div>
    `;
    
    if (quest.completed || isExpired) {
        div.style.opacity = '0.6';
    }
    
    return div;
}

// Format time remaining
function formatTimeRemaining(quest) {
    const now = new Date();
    const expiry = new Date(quest.expiresAt);
    const diff = expiry - now;
    
    if (diff <= 0) return 'EXPIRED';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    } else {
        return `${minutes}m`;
    }
}

// Get difficulty class
function getDifficultyClass(difficulty) {
    return `difficulty-${difficulty}`;
}

// Get reward multiplier
function getRewardMultiplier(difficulty) {
    const multipliers = { easy: 1.0, medium: 1.5, hard: 2.0, extreme: 3.0 };
    return multipliers[difficulty] || 1.0;
}

// Update custom quest progress
function updateCustomQuestProgress(questId, amount) {
    const quest = gameData.customQuests.find(q => q.id === questId);
    if (quest && !quest.completed && !quest.expired) {
        quest.current = Math.min(quest.current + amount, quest.target);
        
        if (quest.current >= quest.target) {
            completeCustomQuest(questId);
        } else {
            gameData.saveData();
            updateCustomQuests();
        }
    }
}

// Complete custom quest
function completeCustomQuest(questId) {
    const quest = gameData.customQuests.find(q => q.id === questId);
    if (quest && !quest.completed) {
        quest.completed = true;
        quest.current = quest.target;
        
        // Calculate difficulty multiplier
        const multipliers = { normal: 1.0, hard: 1.5, hell: 2.0 };
        const multiplier = multipliers[quest.difficulty] || 1.0;
        
        // Award EXP
        const expGain = Math.floor(quest.expReward * multiplier);
        gameData.addExp(expGain);
        
        // Award specific rewards based on type
        const character = gameData.character;
        const rewardAmount = Math.floor(quest.rewardAmount * multiplier);
        
        if (quest.rewardType === 'stat') {
            character[quest.rewardTarget] += rewardAmount;
            character[quest.rewardTarget + 'Gained'] += rewardAmount;
            
            // Update HP/MP based on stat
            if (quest.rewardTarget === 'str') character.hp += rewardAmount * 2;
            if (quest.rewardTarget === 'vit') character.hp += rewardAmount * 3;
            if (quest.rewardTarget === 'int') character.mp += rewardAmount * 3;
            if (quest.rewardTarget === 'per') character.mp += rewardAmount * 2;
            if (quest.rewardTarget === 'agi') character.hp += rewardAmount;
            if (quest.rewardTarget === 'cmd') character.mp += rewardAmount;
            
        } else if (quest.rewardType === 'freePoints') {
            character.availablePoints += rewardAmount;
            
        } else if (quest.rewardType === 'skill') {
            const skill = gameData.skills.find(s => s.name === quest.rewardTarget);
            if (skill) {
                skill.proficiency += rewardAmount;
                while (skill.proficiency >= skill.maxProficiency) {
                    skill.proficiency -= skill.maxProficiency;
                    skill.level += 1;
                    skill.maxProficiency = skill.level * 100;
                    showToast('Skill Level Up!', `${skill.name} reached level ${skill.level}!`, 'success');
                }
            }
        }
        
        // Create hell tier achievement if applicable
        if (quest.difficulty === 'hell' && quest.achievementTitle) {
            gameData.addAchievement({
                name: quest.achievementTitle,
                description: quest.achievementDescription,
                type: 'quest',
                target: 1,
                progress: 1
            });
        }
        
        gameData.saveData();
        updateCustomQuests();
        updateStatusPage();
        
        let rewardText = `${expGain} EXP`;
        if (quest.rewardType === 'stat') {
            rewardText += `, +${rewardAmount} ${quest.rewardTarget.toUpperCase()}`;
        } else if (quest.rewardType === 'freePoints') {
            rewardText += `, +${rewardAmount} Free Points`;
        } else if (quest.rewardType === 'skill') {
            rewardText += `, +${rewardAmount}% ${quest.rewardTarget} Proficiency`;
        }
        
        showToast('Quest Complete!', `${quest.name} completed! Gained ${rewardText}`, 'success');
    }
}

// Delete custom quest
function deleteCustomQuest(questId) {
    if (confirm('Are you sure you want to delete this quest?')) {
        gameData.customQuests = gameData.customQuests.filter(q => q.id !== questId);
        gameData.saveData();
        updateCustomQuests();
        showToast('Quest Deleted', 'Custom quest has been deleted', 'info');
    }
}

// Update daily timer
function updateDailyTimer() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('daily-timer').textContent = `Reset in: ${timeString}`;
}

// Update skills page
function updateSkillsPage() {
    const container = document.getElementById('skills-grid');
    container.innerHTML = '';
    
    if (gameData.skills.length === 0) {
        container.innerHTML = '<div style="text-align: center; color: #64748b; padding: 2rem;">No skills created yet. Create your first skill!</div>';
        return;
    }
    
    gameData.skills.forEach(skill => {
        const skillElement = createSkillElement(skill);
        container.appendChild(skillElement);
    });
}

// Create skill element
function createSkillElement(skill) {
    const div = document.createElement('div');
    div.className = 'skill-item';
    
    const progressPercentage = (skill.proficiency / skill.maxProficiency) * 100;
    const skillIcon = getSkillIcon(skill.icon);
    
    div.innerHTML = `
        <div class="skill-header">
            <div class="skill-info">
                <div class="skill-icon-name">
                    ${skillIcon}
                    <div class="skill-name">${skill.name}</div>
                </div>
                <div class="skill-category">${skill.category}</div>
            </div>
            <div class="skill-level">Lv. ${skill.level}</div>
        </div>
        <div class="skill-progress">
            <div class="skill-progress-bar">
                <div class="skill-progress-fill" style="width: ${progressPercentage}%"></div>
            </div>
            <div class="skill-progress-text">
                <span>Proficiency: ${skill.proficiency} / ${skill.maxProficiency}</span>
                <span>${Math.round(progressPercentage)}%</span>
            </div>
        </div>
        <div class="skill-controls">
            <button class="skill-button" onclick="updateSkillProficiency(${skill.id}, 10)">PRACTICE (+10)</button>
            <button class="skill-button" onclick="deleteSkill(${skill.id})" style="background: #ef4444;">DELETE</button>
        </div>
    `;
    
    return div;
}

// Get skill icon based on icon class
function getSkillIcon(iconClass) {
    switch (iconClass) {
        case 'fas fa-eye':
            return '<span class="skill-icon">👁️</span>';
        case 'fas fa-circle':
            return '<span class="skill-icon">⭕</span>';
        case 'fas fa-heart':
            return '<span class="skill-icon">💖</span>';
        case 'fas fa-shield-alt':
            return '<span class="skill-icon">🛡️</span>';
        case 'fas fa-bullseye':
            return '<span class="skill-icon">🎯</span>';
        case 'fas fa-running':
            return '<span class="skill-icon">🏃</span>';
        default:
            return '<span class="skill-icon">⭐</span>';
    }
}

// Update skill proficiency
function updateSkillProficiency(skillId, proficiencyGain) {
    const skill = gameData.skills.find(s => s.id === skillId);
    if (skill) {
        skill.proficiency += proficiencyGain;
        
        while (skill.proficiency >= skill.maxProficiency) {
            skill.proficiency -= skill.maxProficiency;
            skill.level += 1;
            skill.maxProficiency = skill.level * 100;
            
            showToast('Skill Level Up!', `${skill.name} reached level ${skill.level}!`, 'success');
            
            // Check skill achievements
            const skillAchievement = gameData.achievements.find(a => a.type === 'skill' && a.target === 10);
            if (skillAchievement && skill.level >= 10) {
                skillAchievement.progress = Math.max(skillAchievement.progress, skill.level);
                if (!skillAchievement.completed && skillAchievement.progress >= skillAchievement.target) {
                    skillAchievement.completed = true;
                    skillAchievement.dateEarned = new Date().toISOString();
                    showToast('Achievement Unlocked!', skillAchievement.name, 'success');
                }
            }
        }
        
        gameData.saveData();
        updateSkillsPage();
        showToast('Skill Training', `${skill.name} proficiency increased!`, 'success');
    }
}

// Delete skill
function deleteSkill(skillId) {
    if (confirm('Are you sure you want to delete this skill?')) {
        gameData.skills = gameData.skills.filter(s => s.id !== skillId);
        gameData.saveData();
        updateSkillsPage();
        showToast('Skill Deleted', 'Skill has been deleted', 'info');
    }
}

// Update sins page
function updateSinsPage() {
    updateSinsDisplay();
    updateSinQuests();
}

// Update sins display
function updateSinsDisplay() {
    const container = document.getElementById('sins-grid');
    container.innerHTML = '';
    
    gameData.sins.forEach(sin => {
        const sinElement = createSinElement(sin);
        container.appendChild(sinElement);
    });
}

// Create sin element
function createSinElement(sin) {
    const div = document.createElement('div');
    div.className = 'sin-item';
    
    const pointsPercentage = (sin.points / sin.maxPoints) * 100;
    
    div.innerHTML = `
        <div class="sin-header">
            <div class="sin-name">${sin.name}</div>
            <div class="sin-level">Lv. ${sin.level}</div>
        </div>
        <div class="sin-icon">${sin.icon}</div>
        <div class="sin-points">
            <div class="sin-points-bar">
                <div class="sin-points-fill" style="width: ${pointsPercentage}%"></div>
            </div>
            <div class="sin-points-text">
                <span>Points: ${sin.points} / ${sin.maxPoints}</span>
            </div>
        </div>
        <div class="sin-power">
            <div class="sin-power-label">POWER</div>
            <div class="sin-power-value">${sin.power}</div>
        </div>
    `;
    
    return div;
}

// Update sin quests
function updateSinQuests() {
    const container = document.getElementById('sin-quests');
    const questsContainer = document.getElementById('sin-quests-container');
    
    if (gameData.sinQuests.length === 0) {
        questsContainer.style.display = 'none';
        return;
    }
    
    questsContainer.style.display = 'block';
    container.innerHTML = '';
    
    // Check for expired quests
    const now = new Date();
    gameData.sinQuests.forEach(quest => {
        if (!quest.completed && new Date(quest.expiresAt) <= now) {
            quest.expired = true;
        }
    });
    
    gameData.sinQuests.forEach(quest => {
        const questElement = createSinQuestElement(quest);
        container.appendChild(questElement);
    });
}

// Create sin quest element
function createSinQuestElement(quest) {
    const div = document.createElement('div');
    div.className = 'quest-item';
    
    const difficultyClass = getDifficultyClass(quest.difficulty);
    const timeRemaining = formatTimeRemaining(quest);
    const isExpired = quest.expired || new Date(quest.expiresAt) <= new Date();
    
    div.innerHTML = `
        <div class="quest-info">
            <div class="quest-name">${quest.name} (${quest.sinType})</div>
            <div class="quest-description">${quest.description}</div>
            <div class="quest-progress">${quest.current} / ${quest.target}</div>
            ${isExpired ? '<div class="timer-remaining" style="color: #ef4444;">EXPIRED</div>' : `<div class="timer-remaining">${timeRemaining}</div>`}
        </div>
        <div class="quest-controls">
            <div class="difficulty-badge ${difficultyClass}">${quest.difficulty}</div>
            <div style="display: flex; gap: 0.5rem;">
                <button class="quest-button" onclick="updateSinQuestProgress(${quest.id}, 1)" ${quest.completed || isExpired ? 'disabled' : ''}>
                    ${quest.completed ? 'COMPLETED' : isExpired ? 'EXPIRED' : '+1'}
                </button>
                <button class="quest-button" onclick="deleteSinQuest(${quest.id})" style="background: #ef4444;">
                    DELETE
                </button>
            </div>
        </div>
    `;
    
    if (quest.completed || isExpired) {
        div.style.opacity = '0.6';
    }
    
    return div;
}

// Update sin quest progress
function updateSinQuestProgress(questId, amount) {
    const quest = gameData.sinQuests.find(q => q.id === questId);
    if (quest && !quest.completed && !quest.expired) {
        quest.current = Math.min(quest.current + amount, quest.target);
        
        if (quest.current >= quest.target) {
            completeSinQuest(questId);
        } else {
            gameData.saveData();
            updateSinQuests();
        }
    }
}

// Complete sin quest
function completeSinQuest(questId) {
    const quest = gameData.sinQuests.find(q => q.id === questId);
    if (quest && !quest.completed) {
        quest.completed = true;
        quest.current = quest.target;
        
        const sinPointsMap = { easy: 10, medium: 25, hard: 50, extreme: 100 };
        const sinPoints = sinPointsMap[quest.difficulty] || 10;
        
        gameData.addSinPoints(quest.sinType, sinPoints);
        
        // Update sin achievements
        const sinAchievement = gameData.achievements.find(a => a.type === 'sin' && a.target === 1);
        if (sinAchievement && !sinAchievement.completed) {
            sinAchievement.progress += 1;
            if (sinAchievement.progress >= sinAchievement.target) {
                sinAchievement.completed = true;
                sinAchievement.dateEarned = new Date().toISOString();
                showToast('Achievement Unlocked!', sinAchievement.name, 'success');
            }
        }
        
        gameData.saveData();
        updateSinQuests();
        updateSinsDisplay();
        showToast('Sin Quest Complete!', `${quest.name} completed! Gained ${sinPoints} ${quest.sinType} points`, 'warning');
    }
}

// Delete sin quest
function deleteSinQuest(questId) {
    if (confirm('Are you sure you want to delete this sin quest?')) {
        gameData.sinQuests = gameData.sinQuests.filter(q => q.id !== questId);
        gameData.saveData();
        updateSinQuests();
        showToast('Sin Quest Deleted', 'Sin quest has been deleted', 'info');
    }
}

// Update achievements page
function updateAchievementsPage() {
    updateAchievementStats();
    const container = document.getElementById('achievements-grid');
    container.innerHTML = '';
    
    gameData.achievements.forEach(achievement => {
        const achievementElement = createAchievementElement(achievement);
        container.appendChild(achievementElement);
    });
}

// Create achievement element
function createAchievementElement(achievement) {
    const div = document.createElement('div');
    div.className = `achievement-item ${achievement.completed ? 'completed' : ''}`;
    
    const progressPercentage = Math.min((achievement.progress / achievement.target) * 100, 100);
    
    div.innerHTML = `
        <div class="achievement-header">
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-badge ${achievement.type}">${achievement.type}</div>
        </div>
        <div class="achievement-description">${achievement.description}</div>
        ${achievement.completed ? 
            `<div class="achievement-completed">✓ COMPLETED</div>` :
            `<div class="achievement-progress">
                <div class="achievement-progress-bar">
                    <div class="achievement-progress-fill" style="width: ${progressPercentage}%"></div>
                </div>
                <div class="achievement-progress-text">
                    <span>Progress: ${achievement.progress} / ${achievement.target}</span>
                    <span>${Math.floor(progressPercentage)}%</span>
                </div>
            </div>`
        }
    `;
    
    return div;
}

// Update achievement stats
function updateAchievementStats() {
    const container = document.getElementById('achievements-stats');
    const total = gameData.achievements.length;
    const completed = gameData.achievements.filter(a => a.completed).length;
    const completionRate = total > 0 ? Math.floor((completed / total) * 100) : 0;
    
    container.innerHTML = `
        <div class="achievement-stat">
            <div class="achievement-stat-label">Total Achievements</div>
            <div class="achievement-stat-value">${total}</div>
        </div>
        <div class="achievement-stat">
            <div class="achievement-stat-label">Completed</div>
            <div class="achievement-stat-value">${completed}</div>
        </div>
        <div class="achievement-stat">
            <div class="achievement-stat-label">Completion Rate</div>
            <div class="achievement-stat-value">${completionRate}%</div>
        </div>
    `;
}

// Modal functionality
function openQuestModal() {
    document.getElementById('quest-modal').style.display = 'flex';
}

function closeQuestModal() {
    document.getElementById('quest-modal').style.display = 'none';
    document.getElementById('quest-form').reset();
}

function openSkillModal() {
    document.getElementById('skill-modal').style.display = 'flex';
}

function closeSkillModal() {
    document.getElementById('skill-modal').style.display = 'none';
    document.getElementById('skill-form').reset();
}

function openSinQuestModal() {
    document.getElementById('sin-quest-modal').style.display = 'flex';
}

function closeSinQuestModal() {
    document.getElementById('sin-quest-modal').style.display = 'none';
    document.getElementById('sin-quest-form').reset();
}

// Form submissions
function createQuest(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const difficulty = formData.get('questDifficulty');
    
    // Validate hell tier requirements
    if (difficulty === 'hell') {
        const achievementTitle = formData.get('achievementTitle');
        const achievementDescription = formData.get('achievementDescription');
        if (!achievementTitle?.trim() || !achievementDescription?.trim()) {
            showToast('Invalid Input', 'Hell tier quests require achievement title and description.', 'error');
            return;
        }
    }
    
    const quest = {
        id: gameData.nextQuestId++,
        name: formData.get('questName'),
        description: formData.get('questDescription'),
        difficulty: difficulty,
        timeLimit: parseInt(formData.get('questTimeLimit')),
        target: parseInt(formData.get('questTarget')),
        current: 0,
        completed: false,
        rewardType: formData.get('questRewardType'),
        rewardTarget: formData.get('questRewardTarget'),
        rewardAmount: parseInt(formData.get('questRewardAmount')),
        expReward: parseInt(formData.get('questExpReward')),
        penaltyAmount: parseInt(formData.get('questPenalty')),
        achievementTitle: formData.get('achievementTitle') || '',
        achievementDescription: formData.get('achievementDescription') || '',
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + parseInt(formData.get('questTimeLimit')) * 60 * 60 * 1000).toISOString()
    };
    
    gameData.customQuests.push(quest);
    gameData.saveData();
    
    closeQuestModal();
    updateCustomQuests();
    showToast('Quest Created!', `${quest.name} has been created!`, 'success');
}

function createSkill(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const skill = {
        id: gameData.nextSkillId++,
        characterId: 1,
        name: formData.get('skillName'),
        category: formData.get('skillCategory'),
        level: 1,
        proficiency: 0,
        maxProficiency: parseInt(formData.get('skillMaxProficiency')),
        icon: formData.get('skillIcon'),
        createdAt: new Date().toISOString()
    };
    
    gameData.skills.push(skill);
    
    // Update skill achievements
    const skillAchievement = gameData.achievements.find(a => a.type === 'skill' && a.target === 1);
    if (skillAchievement && !skillAchievement.completed) {
        skillAchievement.progress += 1;
        if (skillAchievement.progress >= skillAchievement.target) {
            skillAchievement.completed = true;
            skillAchievement.dateEarned = new Date().toISOString();
            showToast('Achievement Unlocked!', skillAchievement.name, 'success');
        }
    }
    
    gameData.saveData();
    
    closeSkillModal();
    updateSkillsPage();
    showToast('Skill Created!', `${skill.name} has been created!`, 'success');
}

function createSinQuest(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const quest = {
        id: gameData.nextSinQuestId++,
        name: formData.get('sinQuestName'),
        sinType: formData.get('sinQuestSin'),
        description: formData.get('sinQuestDescription'),
        difficulty: formData.get('sinQuestDifficulty'),
        target: parseInt(formData.get('sinQuestTarget')),
        current: 0,
        completed: false,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + parseInt(formData.get('sinQuestDuration')) * 60 * 60 * 1000).toISOString()
    };
    
    gameData.sinQuests.push(quest);
    gameData.saveData();
    
    closeSinQuestModal();
    updateSinQuests();
    showToast('Sin Quest Created!', `${quest.name} has been created!`, 'warning');
}

// Toast notification function
function showToast(title, description, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-title">${title}</div>
        <div class="toast-description">${description}</div>
    `;
    
    // Set border color based on type
    if (type === 'warning') {
        toast.style.borderColor = '#f59e0b';
    } else if (type === 'error') {
        toast.style.borderColor = '#ef4444';
    } else if (type === 'info') {
        toast.style.borderColor = '#06b6d4';
    }
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    
    // Set up stat buttons
    document.querySelectorAll('.stat-button').forEach(button => {
        button.addEventListener('click', () => {
            addStat(button.dataset.stat);
        });
    });
    
    // Set up modal buttons
    document.getElementById('open-quest-modal-btn').addEventListener('click', openQuestModal);
    document.getElementById('close-quest-modal-btn').addEventListener('click', closeQuestModal);
    document.getElementById('cancel-quest-btn').addEventListener('click', closeQuestModal);
    document.getElementById('open-skill-modal-btn').addEventListener('click', openSkillModal);
    document.getElementById('close-skill-modal-btn').addEventListener('click', closeSkillModal);
    document.getElementById('cancel-skill-btn').addEventListener('click', closeSkillModal);
    document.getElementById('open-sin-quest-modal-btn').addEventListener('click', openSinQuestModal);
    document.getElementById('close-sin-quest-modal-btn').addEventListener('click', closeSinQuestModal);
    
    // Set up dynamic form behavior for quest creation
    const questDifficultySelect = document.getElementById('quest-difficulty');
    const hellTierSection = document.getElementById('hell-tier-section');
    const questRewardTypeSelect = document.getElementById('quest-reward-type');
    const questRewardTargetSelect = document.getElementById('quest-reward-target');
    
    questDifficultySelect.addEventListener('change', function() {
        if (this.value === 'hell') {
            hellTierSection.style.display = 'block';
        } else {
            hellTierSection.style.display = 'none';
        }
    });
    
    questRewardTypeSelect.addEventListener('change', function() {
        const rewardType = this.value;
        questRewardTargetSelect.innerHTML = '';
        
        if (rewardType === 'stat') {
            const stats = [
                { value: 'str', text: 'STR' },
                { value: 'vit', text: 'VIT' },
                { value: 'int', text: 'INT' },
                { value: 'per', text: 'PER' },
                { value: 'agi', text: 'AGI' },
                { value: 'cmd', text: 'CMD' }
            ];
            stats.forEach(stat => {
                const option = document.createElement('option');
                option.value = stat.value;
                option.textContent = stat.text;
                questRewardTargetSelect.appendChild(option);
            });
        } else if (rewardType === 'freePoints') {
            const option = document.createElement('option');
            option.value = 'freePoints';
            option.textContent = 'Available Points';
            questRewardTargetSelect.appendChild(option);
        } else if (rewardType === 'skill') {
            const skills = [
                'Observation', 'Aura', 'Charm', 'Pain Tolerance', 'Focus', 'Endurance'
            ];
            skills.forEach(skill => {
                const option = document.createElement('option');
                option.value = skill;
                option.textContent = skill;
                questRewardTargetSelect.appendChild(option);
            });
        }
    });
    
    // Set up form submissions
    document.getElementById('quest-form').addEventListener('submit', createQuest);
    document.getElementById('skill-form').addEventListener('submit', createSkill);
    document.getElementById('sin-quest-form').addEventListener('submit', createSinQuest);
    
    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Initial page load
    updateStatusPage();
    
    // Update daily timer every second
    setInterval(updateDailyTimer, 1000);
    
    // Check for daily reset every minute
    setInterval(() => gameData.checkDailyReset(), 60000);
});
