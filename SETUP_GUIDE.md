# 🚀 Firebase Setup Guide for Office Locator

This guide will help you set up Firebase hosting and database for your Office Locator app.

## 📋 Prerequisites

1. **Google Account** - You'll need a Google account to use Firebase
2. **Node.js** - Install from [nodejs.org](https://nodejs.org/)
3. **Git** - Install from [git-scm.com](https://git-scm.com/)

## 🔥 Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Enter a project name (e.g., "office-locator")
4. Choose whether to enable Google Analytics (optional)
5. Click **"Create project"**

## 🗄️ Step 2: Set Up Firestore Database

1. In your Firebase project, go to **"Firestore Database"**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development)
4. Select a location (choose closest to your users)
5. Click **"Done"**

## 🔧 Step 3: Get Firebase Configuration

1. In Firebase Console, click the **gear icon** ⚙️ next to "Project Overview"
2. Select **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click **"Add app"** and choose **"Web"** (</>)
5. Register your app with a nickname (e.g., "office-locator-web")
6. Copy the configuration object

## 📝 Step 4: Update Configuration Files

### Update `.firebaserc`:
```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

### Update `index.html`:
Replace the `firebaseConfig` object in the script section with your actual configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-actual-project-id.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-actual-project-id.appspot.com",
  messagingSenderId: "your-actual-messaging-sender-id",
  appId: "your-actual-app-id"
};
```

## 🛠️ Step 5: Install Firebase CLI

Open your terminal/command prompt and run:

```bash
npm install -g firebase-tools
```

## 🔐 Step 6: Login to Firebase

```bash
firebase login
```

This will open your browser to authenticate with your Google account.

## 🚀 Step 7: Initialize Firebase Hosting

In your project directory, run:

```bash
firebase init hosting
```

When prompted:
- Select your project
- Use "." as your public directory
- Configure as a single-page app: **Yes**
- Don't overwrite index.html: **No**

## 📤 Step 8: Deploy to Firebase

```bash
firebase deploy
```

## 🌐 Step 9: Access Your App

After deployment, Firebase will provide you with a URL like:
`https://your-project-id.web.app`

## 🔒 Step 10: Security Rules (Optional)

For production, update Firestore security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /offices/{document} {
      allow read, write: if true; // For public access
    }
  }
}
```

## 📱 Features of Your Firebase App

✅ **Real-time Database** - All users see the same data  
✅ **Cloud Hosting** - Fast, reliable hosting  
✅ **Automatic Scaling** - Handles traffic spikes  
✅ **Global CDN** - Fast loading worldwide  
✅ **SSL Certificate** - Secure HTTPS connection  

## 🔄 Real-time Updates (Optional)

To enable real-time updates, uncomment the last section in `index.html`:

```javascript
db.collection('offices')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => {
        // Real-time updates code
    });
```

## 📊 Firebase Free Tier Limits

- **Hosting**: 10GB storage, 360MB/day transfer
- **Firestore**: 1GB storage, 50,000 reads/day, 20,000 writes/day
- **Perfect for small to medium apps!**

## 🆘 Troubleshooting

### Common Issues:

1. **"Firebase not defined"** - Check if Firebase SDK is loaded
2. **"Permission denied"** - Check Firestore security rules
3. **"Project not found"** - Verify project ID in `.firebaserc`

### Need Help?
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Community](https://firebase.google.com/community)

## 🎉 You're Done!

Your Office Locator app is now:
- ✅ Hosted on Firebase
- ✅ Using cloud database
- ✅ Accessible to all users
- ✅ Real-time synchronized

Share your Firebase URL with others and they can access the same office locations! 