# Turning on S² accounts

Accounts let learners sign in with **Google**, **Microsoft** or **email and password**. Their progress, XP, streak and notes then sync across devices.

The code is already in the site. Real sign-in stays switched off until you paste your Firebase settings into `shared/s2-firebase-config.js`. Until then, the Sign in button shows an "Accounts are coming soon" message and offers the subject picker instead.

To preview the sign-in screens on any page before setting anything up, add `?auth=preview` to the address, e.g. `https://ssquaredhq.com/?auth=preview`. The buttons won't sign anyone in yet.

Firebase's free Spark plan is plenty to start with. You don't need a credit card.

---

## 1. Create a Firebase project (about 5 minutes)

1. Go to <https://console.firebase.google.com> and sign in with a Google account you'll keep long-term.
2. Click **Create a project**. Call it something like `ssquared`. You can switch Google Analytics off.
3. On the project home page, click the **web** icon (`</>`) to add a web app. Call it `S2 website`. Leave "Firebase Hosting" unticked, because the site stays on GitHub.
4. Firebase shows a block of code containing `const firebaseConfig = { ... }`. Copy these four values into `shared/s2-firebase-config.js`:

   ```js
   window.S2_FIREBASE = {
     apiKey: "AIza...",
     authDomain: "ssquared-xxxx.firebaseapp.com",
     projectId: "ssquared-xxxx",
     appId: "1:1234567890:web:abc123"
   };
   ```

   It's fine for these values to be public. Firebase web config is designed to be visible. The data is protected by the security rules in step 3.

## 2. Switch on the sign-in methods

In the Firebase console, open **Authentication** → **Get started** → **Sign-in method**.

**Email/Password**
- Click it, turn on **Email/Password** (leave "Email link" off), then **Save**.

**Google**
- Click it, turn it on, choose a support email, then **Save**.

**Microsoft** (takes the longest, about 10 minutes)
1. In Firebase, click **Microsoft** and turn it on. Keep this tab open: it shows a **redirect URI** like `https://ssquared-xxxx.firebaseapp.com/__/auth/handler`. Copy it.
2. In a new tab, go to <https://portal.azure.com> (any Microsoft account works) → **Microsoft Entra ID** → **App registrations** → **New registration**.
   - Name: `S2 website`
   - Supported account types: **Accounts in any organizational directory and personal Microsoft accounts**. This lets both school and personal Microsoft accounts sign in.
   - Redirect URI: choose **Web** and paste the redirect URI from Firebase.
   - Click **Register**.
3. On the app's **Overview** page, copy the **Application (client) ID**.
4. Go to **Certificates & secrets** → **New client secret**, give it a description, and choose the longest expiry. Copy the secret's **Value** straight away, because it's only shown once.
5. Back in Firebase, paste the client ID and the client secret into the Microsoft panel and click **Save**.

The client secret expires (at most after 24 months). Set a calendar reminder to make a new one before then and paste it into Firebase. If you forget, Microsoft sign-in will stop working, but the other methods won't be affected.

Some schools block students from signing in to outside apps with their school Microsoft account. If that happens, students can use Google or email instead.

**Authorised domains**
- Still in Authentication, open **Settings** → **Authorized domains** → **Add domain** and add `ssquaredhq.com` (and `www.ssquaredhq.com` if you use it).

## 3. Create the database and lock it down

1. In the Firebase console, open **Firestore Database** → **Create database**.
2. Pick the location closest to your learners, e.g. `europe-west2 (London)`. This can't be changed later.
3. Start in **production mode**.
4. Open the **Rules** tab, delete what's there, paste in the contents of `firestore.rules` from this repository, and click **Publish**.

These rules mean each signed-in learner can only ever read or change their own data.

## 4. Publish

Commit the updated `shared/s2-firebase-config.js` and merge to your live branch. A **Sign in** button (👤) now appears next to the dark-mode button on every page, including Mandarin².

---

## How it works (for reference)

- Without signing in, everything works as before. Progress is saved in the browser only.
- When someone signs in, the progress already on that device is **merged** into their account, keeping the best scores, all completed flashcards, every active streak day, and the newest version of each note. The merged result is saved on the device and in their account.
- After that, any change syncs a couple of seconds later.
- **Signing out** removes that account's progress and notes from the device, so shared school computers stay private. If the latest changes couldn't be saved (e.g. offline), the learner is warned first.
- **Delete my account** (in the account menu) deletes their stored data and their sign-in.
- Data is stored as one document per learner at `users/{uid}` in Firestore.

## Things to think about

- **Age.** Google accounts need users to be 13+ in the UK, and the UK's Age Appropriate Design Code applies to services likely to be used by children. The privacy policies on the site have been updated to describe accounts, but have someone check they suit your situation. This guide isn't legal advice.
- **Email verification** isn't required. If you want it, it can be added later.
