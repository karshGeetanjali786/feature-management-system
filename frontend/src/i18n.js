import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  // =====================================================
  // ENGLISH
  // =====================================================
  en: {
    translation: {
      language: "Language",

      home: "Dashboard",
      featureFlags: "Feature Flags",
      environments: "Environments",
      groups: "Groups",
      targetingRules: "Targeting Rules",
      overrides: "Overrides",
      evaluationTester: "Evaluation Tester",
      auditLogs: "Audit Logs",
      logout: "Logout",

      // ---------------- HOME ----------------

      releaseControlHub: "RELEASE CONTROL HUB",
      featureManagementConsole:
        "Feature Management Console",
      dashboardDescription:
        "Manage feature flags, environments and configuration from one place.",
      signedInAs: "Signed in as",

      totalFeatureFlags: "Total Feature Flags",
      activeFlags: "Active Flags",
      environmentsCount: "Environments",
      overridesCount: "Overrides",
      todaysEvaluations: "Today's Evaluations",
      auditLogsToday: "Audit Logs Today",

      evaluationAnalytics: "EVALUATION ANALYTICS",
      featureFlagEvaluations:
        "Feature Flag Evaluations",
      evaluationActivity:
        "Evaluation activity during the last 24 hours.",
      totalEvaluations: "Total Evaluations",
      loadingAnalytics: "Loading analytics...",
      noEvaluationData:
        "No evaluation data available yet.",
      evaluations: "Evaluations",
      time: "Time",

      flagAnalytics: "FLAG ANALYTICS",
      evaluationsByFeatureFlag:
        "Evaluations by Feature Flag",
      flagEvaluationDescription:
        "Evaluation count for each feature flag during the last 24 hours.",
      loadingFlagAnalytics:
        "Loading flag analytics...",
      noFlagAnalytics:
        "No feature flag analytics available.",
      evaluation: "evaluation",
      evaluationsPlural: "evaluations",

      environmentAnalytics:
        "ENVIRONMENT ANALYTICS",
      environmentUsage: "Environment Usage",
      environmentUsageDescription:
        "Feature flag evaluation usage across environments during the last 24 hours.",
      loadingEnvironmentUsage:
        "Loading environment usage...",
      noEnvironmentUsage:
        "No environment usage data available.",

      auditActivity: "AUDIT ACTIVITY",
      recentAuditLogs: "Recent Audit Logs",
      latestChanges:
        "Latest changes made in the feature management system.",
      viewAll: "View All",
      loadingAuditLogs:
        "Loading audit logs...",
      noAuditActivity:
        "No audit activity available.",
      actor: "Actor",
      environment: "Environment",

      welcome: "WELCOME",
      welcomeTitle:
        "You're inside the Feature Management System.",
      welcomeDescription:
        "Manage feature flags, environments, targeting rules, rollouts and evaluation controls from the dashboard.",
      manageFeatureFlags:
        "Manage Feature Flags",

      // ---------------- FEATURE FLAGS ----------------

      releaseControl: "RELEASE CONTROL",
      featureFlagsDescription:
        "Manage feature flags, enablement and percentage-based rollouts.",

      totalFlags: "Total Flags",
      enabledFlags: "Enabled Flags",
      rolloutEnabled: "Rollout Enabled",

      flagDirectory: "FLAG DIRECTORY",
      allFeatureFlags: "All Feature Flags",
      createFeatureFlag: "Create Feature Flag",

      noFeatureFlags: "No feature flags found",
      featureFlagEmptyText:
        "Create a feature flag to start managing rollout behaviour.",

      flag: "Flag",
      status: "Status",
      rollout: "Rollout",
      owner: "Owner",
      action: "Action",

      enabled: "Enabled",
      disabled: "Disabled",
      viewOnly: "View Only",
      delete: "Delete",

      newFlag: "NEW FLAG",
      flagKey: "Flag Key",
      type: "Type",
      description: "Description",
      ownerTeam: "Owner Team",
      rolloutPercentage: "Rollout Percentage",
      enableFeatureFlag:
        "Enable this feature flag",

      cancel: "Cancel",
      createFlag: "Create Flag",

      couldNotLoadFeatureFlags:
        "Could not load feature flags.",
      featureFlagKeyRequired:
        "Feature flag key is required.",
      couldNotCreateFeatureFlag:
        "Could not create feature flag.",
      featureFlagCreated:
        "Feature flag created successfully.",
      couldNotUpdateRollout:
        "Could not update rollout percentage.",
      rolloutUpdated:
        "{{key}} rollout updated to {{percentage}}%.",
      confirmDeleteFeatureFlag:
        "Are you sure you want to delete this feature flag?",
      couldNotDeleteFeatureFlag:
        "Could not delete feature flag.",
      featureFlagDeleted:
        "Feature flag deleted successfully.",

      flagDescriptionPlaceholder:
        "What does this flag control?",


      // ---------------- GROUPS ----------------

      userManagement: "USER MANAGEMENT",
      userGroups: "User Groups",
      userGroupsDescription:
        "Create and manage groups used for feature flag targeting.",

      searchGroups: "Search groups...",
      createGroup: "Create Group",

      groupDirectory: "GROUP DIRECTORY",
      allGroups: "All Groups",
      group: "group",
      groups: "groups",

      noGroupsFound: "No groups found",
      noGroupsDescription:
        "Create your first user group to start targeting features.",

      groupId: "GROUP ID",
      created: "CREATED",
      actions: "ACTIONS",

      userTargetingGroup: "User targeting group",
      viewMembers: "View Members",

      newGroup: "NEW GROUP",
      createUserGroup: "Create User Group",
      groupName: "Group Name",
      groupNamePlaceholder: "e.g. beta_users",

      groupNameRequired: "Please enter a group name.",
      couldNotLoadGroups: "Could not load groups.",
      couldNotCreateGroup: "Could not create group.",
      groupCreated: "Group created successfully.",
      confirmDeleteGroup:
        "Are you sure you want to delete this group?",
      couldNotDeleteGroup: "Could not delete group.",
      groupDeleted: "Group deleted successfully.",

      //Group members
      groupNotFound: "Group not found.",
      couldNotLoadGroupMembers: "Could not load group members.",
      userIdRequired: "Please enter a User ID.",
      couldNotAddUser: "Could not add user.",
      userAddedSuccessfully: "User added successfully.",
      confirmRemoveUser:
        "Are you sure you want to remove this user?",
      couldNotRemoveUser: "Could not remove user.",
      userRemovedSuccessfully: "User removed successfully.",
      backToGroups: "Back to Groups",
      groupMembership: "Group Membership",
      groupMembers: "Group Members",
      groupMembersDescription:
        "Manage users belonging to this targeting group.",
      totalMembers: "Total Members",
      status: "Status",
      active: "Active",
      membershipDirectory: "Membership Directory",
      members: "members",
      member: "member",
      userId: "User ID",
      enterUserId: "Enter User ID",
      addUser: "Add User",
      noMembersYet: "No members yet",
      adminNoMembersDescription:
        "Add a user to this group to use it for feature targeting.",
      userNoMembersDescription:
        "No users have been added to this group yet.",
      user: "User",
      email: "Email",
      action: "Action",
      groupMember: "Group member",
      remove: "Remove",

      //Evaluation tester 
      flagEvaluation: "Flag Evaluation",
      evaluationTester: "Evaluation Tester",
      evaluationTesterDescription:
        "Test how a feature flag behaves for a specific user and targeting context.",

      testConfiguration: "Test Configuration",
      evaluateFeatureFlag: "Evaluate Feature Flag",

      featureFlag: "Feature Flag",
      selectFeatureFlag: "Select feature flag",

      environment: "Environment",
      selectEnvironment: "Select environment",

      userId: "User ID",
      userIdExample: "Example: user_101",

      groups: "Groups",
      groupsExample: "Example: beta_users, internal_team",

      evaluating: "Evaluating...",
      evaluateFlag: "Evaluate Flag",

      evaluationResult: "Evaluation Result",
      decisionDetails: "Decision Details",

      rollout: "Rollout",
      bucket: "Bucket",
      reason: "Reason",
      finalResult: "Final Result",

      enabled: "Enabled",
      disabled: "Disabled",

      howItWasDecided: "How It Was Decided",
      userEvaluatedFor: "User",
      wasEvaluatedFor: "was evaluated for",
      evaluationReason: "Evaluation reason:",
      deterministicBucket: "Deterministic bucket:",
      andRollout: "and rollout:",
      noRolloutBucket:
        "No rollout bucket was required for this evaluation.",

      notAuthenticated:
        "Not authenticated. Please login again.",

      sessionExpired:
        "Session expired. Please login again.",

      couldNotLoadFlagsEnvironments:
        "Could not load feature flags or environments.",

      selectFlagEnvironmentUser:
        "Please select a flag, environment and enter User ID.",

      couldNotEvaluateFlag:
        "Could not evaluate feature flag.",

      //Targeting Rules
      audienceTargeting: "AUDIENCE TARGETING",
      targetingRules: "Targeting Rules",
      targetingRulesDescription:
        "Control which users and groups receive specific feature flags.",
      totalRules: "Total Rules",
      userRules: "User Rules",
      groupRules: "Group Rules",
      createRule: "CREATE RULE",
      addTargetingRule: "Add Targeting Rule",
      featureFlag: "Feature Flag",
      selectFeatureFlag: "Select feature flag",
      ruleType: "Rule Type",
      user: "User",
      group: "Group",
      userId: "User ID",
      selectGroup: "Select group",
      enterUserId: "Enter user ID",
      addRule: "Add Rule",
      activeConfiguration: "ACTIVE CONFIGURATION",
      existingRules: "Existing Rules",
      rule: "Rule",
      rules: "Rules",
      type: "Type",
      target: "Target",
      action: "Action",
      flagId: "Flag ID",
      remove: "Remove",
      noTargetingRules: "No targeting rules",
      addTargetingRuleToStart:
        "Add a user or group rule to start targeting this feature.",
      noTargetingRulesAvailable:
        "No targeting rules are currently available.",
      notAuthenticated: "Not authenticated. Please login again.",
      sessionExpired: "Session expired. Please login again.",
      couldNotLoadTargetingRules:
        "Could not load targeting rules.",
      featureFlagAndRuleRequired:
        "Please enter Feature Flag and Rule Value.",
      adminAccessRequired: "Admin access required.",
      couldNotCreateTargetingRule:
        "Could not create targeting rule.",
      targetingRuleCreated:
        "Targeting rule created successfully.",
      confirmDeleteTargetingRule:
        "Are you sure you want to delete this targeting rule?",
      couldNotDeleteTargetingRule:
        "Could not delete targeting rule.",
      targetingRuleDeleted:
        "Targeting rule deleted successfully.",

      //Environments

      configuration: "CONFIGURATION",
      environmentsDescription: "Manage environments for feature flag releases.",
      totalEnvironments: "Total Environments",
      available: "Available",
      createEnvironment: "CREATE ENVIRONMENT",
      addEnvironment: "Add Environment",
      environmentName: "Environment Name",
      environmentNamePlaceholder: "e.g. Production",
      environmentDescriptionPlaceholder: "Describe this environment",
      createEnvironmentButton: "Create Environment",
      environmentDirectory: "ENVIRONMENT DIRECTORY",
      allEnvironments: "All Environments",
      loadingEnvironments: "Loading environments...",
      noEnvironmentsFound: "No environments found.",
      noDescriptionProvided: "No description provided.",
      environmentNameRequired: "Environment name is required.",
      couldNotLoadEnvironments: "Could not load environments.",
      couldNotCreateEnvironment: "Could not create environment.",
      environmentCreated: "Environment created successfully.",
      confirmDeleteEnvironment:
        "Are you sure you want to delete this environment?",
      couldNotDeleteEnvironment: "Could not delete environment.",
      environmentDeleted: "Environment deleted successfully.",

      //overrides 
      configuration: "Configuration",
      environmentOverrides: "Environment Overrides",
      environmentOverridesDescription:
        "Manage feature flag values for specific environments.",
      couldNotLoadOverridesData:
        "Could not load overrides data.",
      selectFlagAndEnvironment:
        "Please select a feature flag and environment.",
      couldNotCreateOverride:
        "Could not create override.",
      confirmDeleteOverride:
        "Are you sure you want to delete this override?",
      couldNotDeleteOverride:
        "Could not delete override.",
      totalOverrides: "Total Overrides",
      activeConfiguration: "Active Configuration",
      createOverride: "Create Override",
      addEnvironmentOverride: "Add Environment Override",
      featureFlag: "Feature Flag",
      selectFeatureFlag: "Select Feature Flag",
      environment: "Environment",
      selectEnvironment: "Select Environment",
      overrideValue: "Override Value",
      enabledTrue: "Enabled (True)",
      disabledFalse: "Disabled (False)",
      createOverrideButton: "Create Override",
      existingOverrides: "Existing Overrides",
      loading: "Loading...",
      noEnvironmentOverrides: "No environment overrides found.",
      value: "Value",
      enabled: "Enabled",
      disabled: "Disabled",

      //Audit logs 
      systemActivity: "System Activity",
      auditLogsDescription: "Track feature flag changes and user activities.",
      totalLogs: "Total Logs",
      logFilters: "Log Filters",
      filterAuditLogs: "Filter Audit Logs",
      allActions: "All Actions",
      userId: "User ID",
      flagKey: "Flag Key",
      dateFrom: "Date From",
      dateTo: "Date To",
      applyFilters: "Apply Filters",
      clearFilters: "Clear Filters",
      activityHistory: "Activity History",
      auditLogRecords: "Audit Log Records",
      logs: "logs",
      log: "log",
      id: "ID",
      action: "Action",
      user: "User",
      flag: "Flag",
      oldValue: "Old Value",
      newValue: "New Value",
      timestamp: "Timestamp",
      details: "Details",
      loadingAuditLogs: "Loading audit logs...",
      noAuditLogsFound: "No Audit Logs Found",
      noAuditLogsDescription:
        "Try changing your filters or perform an activity.",
      loading: "Loading...",
      viewDetails: "View Details",
      logDetails: "Log Details",
      auditLogNumber: "Audit Log",
      close: "Close",
      flagId: "Flag ID",
      environmentId: "Environment ID",
      time: "Time",
      oldState: "Old State",
      newState: "New State",
      closeDetails: "Close Details",
      failedToFetchAuditLogs: "Failed to fetch audit logs",
      failedToFetchAuditLogDetails:
        "Failed to fetch audit log details",


    },
  },

  // =====================================================
  // HINDI
  // =====================================================
  hi: {
    translation: {
      language: "भाषा",

      home: "डैशबोर्ड",
      featureFlags: "फीचर फ्लैग्स",
      environments: "एनवायरनमेंट्स",
      groups: "ग्रुप्स",
      targetingRules: "टार्गेटिंग रूल्स",
      overrides: "ओवरराइड्स",
      evaluationTester: "इवैल्यूएशन टेस्टर",
      auditLogs: "ऑडिट लॉग्स",
      logout: "लॉगआउट",

      releaseControlHub: "रिलीज़ कंट्रोल हब",
      featureManagementConsole:
        "फीचर मैनेजमेंट कंसोल",
      dashboardDescription:
        "एक ही जगह से फीचर फ्लैग्स, एनवायरनमेंट्स और कॉन्फ़िगरेशन मैनेज करें।",
      signedInAs: "लॉगिन है",

      totalFeatureFlags:
        "कुल फीचर फ्लैग्स",
      activeFlags: "एक्टिव फ्लैग्स",
      environmentsCount: "एनवायरनमेंट्स",
      overridesCount: "ओवरराइड्स",
      todaysEvaluations:
        "आज के इवैल्यूएशन्स",
      auditLogsToday:
        "आज के ऑडिट लॉग्स",

      evaluationAnalytics:
        "इवैल्यूएशन एनालिटिक्स",
      featureFlagEvaluations:
        "फीचर फ्लैग इवैल्यूएशन्स",
      evaluationActivity:
        "पिछले 24 घंटों की इवैल्यूएशन एक्टिविटी।",
      totalEvaluations:
        "कुल इवैल्यूएशन्स",
      loadingAnalytics:
        "एनालिटिक्स लोड हो रही है...",
      noEvaluationData:
        "अभी कोई इवैल्यूएशन डेटा उपलब्ध नहीं है।",
      evaluations: "इवैल्यूएशन्स",
      time: "समय",

      flagAnalytics: "फ्लैग एनालिटिक्स",
      evaluationsByFeatureFlag:
        "फीचर फ्लैग के अनुसार इवैल्यूएशन्स",
      flagEvaluationDescription:
        "पिछले 24 घंटों में प्रत्येक फीचर फ्लैग की इवैल्यूएशन संख्या।",
      loadingFlagAnalytics:
        "फ्लैग एनालिटिक्स लोड हो रही है...",
      noFlagAnalytics:
        "कोई फीचर फ्लैग एनालिटिक्स उपलब्ध नहीं है।",
      evaluation: "इवैल्यूएशन",
      evaluationsPlural:
        "इवैल्यूएशन्स",

      environmentAnalytics:
        "एनवायरनमेंट एनालिटिक्स",
      environmentUsage:
        "एनवायरनमेंट उपयोग",
      environmentUsageDescription:
        "पिछले 24 घंटों में अलग-अलग एनवायरनमेंट्स में फीचर फ्लैग इवैल्यूएशन का उपयोग।",
      loadingEnvironmentUsage:
        "एनवायरनमेंट उपयोग लोड हो रहा है...",
      noEnvironmentUsage:
        "कोई एनवायरनमेंट उपयोग डेटा उपलब्ध नहीं है।",

      auditActivity:
        "ऑडिट एक्टिविटी",
      recentAuditLogs:
        "हाल के ऑडिट लॉग्स",
      latestChanges:
        "फीचर मैनेजमेंट सिस्टम में किए गए नवीनतम बदलाव।",
      viewAll: "सभी देखें",
      loadingAuditLogs:
        "ऑडिट लॉग्स लोड हो रहे हैं...",
      noAuditActivity:
        "कोई ऑडिट एक्टिविटी उपलब्ध नहीं है।",
      actor: "एक्टर",
      environment: "एनवायरनमेंट",

      welcome: "स्वागत है",
      welcomeTitle:
        "आप फीचर मैनेजमेंट सिस्टम के अंदर हैं।",
      welcomeDescription:
        "डैशबोर्ड से फीचर फ्लैग्स, एनवायरनमेंट्स, टार्गेटिंग रूल्स, रोलआउट्स और इवैल्यूएशन कंट्रोल्स मैनेज करें।",
      manageFeatureFlags:
        "फीचर फ्लैग्स मैनेज करें",

      // ---------------- FEATURE FLAGS ----------------

      releaseControl: "रिलीज़ कंट्रोल",
      featureFlagsDescription:
        "फीचर फ्लैग्स, सक्रियण और प्रतिशत आधारित रोलआउट को प्रबंधित करें।",

      totalFlags: "कुल फ्लैग्स",
      enabledFlags: "सक्रिय फ्लैग्स",
      rolloutEnabled: "सक्रिय रोलआउट",

      flagDirectory: "फ्लैग सूची",
      allFeatureFlags: "सभी फीचर फ्लैग्स",
      createFeatureFlag: "फीचर फ्लैग बनाएं",

      noFeatureFlags: "कोई फीचर फ्लैग नहीं मिला",
      featureFlagEmptyText:
        "रोलआउट प्रबंधन शुरू करने के लिए फीचर फ्लैग बनाएं।",

      flag: "फ्लैग",
      status: "स्थिति",
      rollout: "रोलआउट",
      owner: "मालिक",
      action: "कार्य",

      enabled: "सक्रिय",
      disabled: "निष्क्रिय",
      viewOnly: "केवल देखें",
      delete: "हटाएं",

      newFlag: "नया फ्लैग",
      flagKey: "फ्लैग कुंजी",
      type: "प्रकार",
      description: "विवरण",
      ownerTeam: "मालिक टीम",
      rolloutPercentage: "रोलआउट प्रतिशत",
      enableFeatureFlag:
        "इस फीचर फ्लैग को सक्रिय करें",

      cancel: "रद्द करें",
      createFlag: "फ्लैग बनाएं",

      couldNotLoadFeatureFlags:
        "फीचर फ्लैग्स लोड नहीं हो सके।",
      featureFlagKeyRequired:
        "फीचर फ्लैग कुंजी आवश्यक है।",
      couldNotCreateFeatureFlag:
        "फीचर फ्लैग बनाया नहीं जा सका।",
      featureFlagCreated:
        "फीचर फ्लैग सफलतापूर्वक बनाया गया।",
      couldNotUpdateRollout:
        "रोलआउट प्रतिशत अपडेट नहीं किया जा सका।",
      rolloutUpdated:
        "{{key}} का रोलआउट {{percentage}}% पर अपडेट किया गया।",
      confirmDeleteFeatureFlag:
        "क्या आप वाकई इस फीचर फ्लैग को हटाना चाहते हैं?",
      couldNotDeleteFeatureFlag:
        "फीचर फ्लैग हटाया नहीं जा सका।",
      featureFlagDeleted:
        "फीचर फ्लैग सफलतापूर्वक हटाया गया।",

      flagDescriptionPlaceholder:
        "यह फ्लैग क्या नियंत्रित करता है?",

      // Targeting Rules 
      audienceTargeting: "ऑडियंस टार्गेटिंग",
      targetingRules: "टार्गेटिंग नियम",
      targetingRulesDescription:
        "कंट्रोल करें कि कौन से यूज़र और ग्रुप विशेष फीचर फ्लैग प्राप्त करें।",
      totalRules: "कुल नियम",
      userRules: "यूज़र नियम",
      groupRules: "ग्रुप नियम",
      createRule: "नियम बनाएँ",
      addTargetingRule: "टार्गेटिंग नियम जोड़ें",
      featureFlag: "फीचर फ्लैग",
      selectFeatureFlag: "फीचर फ्लैग चुनें",
      ruleType: "नियम का प्रकार",
      user: "यूज़र",
      group: "ग्रुप",
      userId: "यूज़र ID",
      selectGroup: "ग्रुप चुनें",
      enterUserId: "यूज़र ID दर्ज करें",
      addRule: "नियम जोड़ें",
      activeConfiguration: "सक्रिय कॉन्फ़िगरेशन",
      existingRules: "मौजूदा नियम",
      rule: "नियम",
      rules: "नियम",
      type: "प्रकार",
      target: "टार्गेट",
      action: "एक्शन",
      flagId: "फ्लैग ID",
      remove: "हटाएँ",
      noTargetingRules: "कोई टार्गेटिंग नियम नहीं",
      addTargetingRuleToStart:
        "इस फीचर को टार्गेट करने के लिए यूज़र या ग्रुप नियम जोड़ें।",
      noTargetingRulesAvailable:
        "वर्तमान में कोई टार्गेटिंग नियम उपलब्ध नहीं है।",
      notAuthenticated: "प्रमाणीकरण नहीं हुआ। कृपया दोबारा लॉगिन करें।",
      sessionExpired: "सेशन समाप्त हो गया। कृपया दोबारा लॉगिन करें।",
      couldNotLoadTargetingRules:
        "टार्गेटिंग नियम लोड नहीं हो सके।",
      featureFlagAndRuleRequired:
        "कृपया फीचर फ्लैग और नियम वैल्यू दर्ज करें।",
      adminAccessRequired: "केवल Admin को अनुमति है।",
      couldNotCreateTargetingRule:
        "टार्गेटिंग नियम बनाया नहीं जा सका।",
      targetingRuleCreated:
        "टार्गेटिंग नियम सफलतापूर्वक बनाया गया।",
      confirmDeleteTargetingRule:
        "क्या आप इस टार्गेटिंग नियम को हटाना चाहते हैं?",
      couldNotDeleteTargetingRule:
        "टार्गेटिंग नियम हटाया नहीं जा सका।",
      targetingRuleDeleted:
        "टार्गेटिंग नियम सफलतापूर्वक हटा दिया गया।",
      
      
        //Environments
      configuration: "कॉन्फ़िगरेशन",
      environmentsDescription:
        "फीचर फ्लैग रिलीज़ के लिए एनवायरनमेंट मैनेज करें।",
      totalEnvironments: "कुल एनवायरनमेंट",
      available: "उपलब्ध",
      createEnvironment: "एनवायरनमेंट बनाएँ",
      addEnvironment: "एनवायरनमेंट जोड़ें",
      environmentName: "एनवायरनमेंट का नाम",
      environmentNamePlaceholder: "जैसे Production",
      environmentDescriptionPlaceholder:
        "इस एनवायरनमेंट का विवरण दें",
      createEnvironmentButton: "एनवायरनमेंट बनाएँ",
      environmentDirectory: "एनवायरनमेंट डायरेक्टरी",
      allEnvironments: "सभी एनवायरनमेंट",
      loadingEnvironments: "एनवायरनमेंट लोड हो रहे हैं...",
      noEnvironmentsFound: "कोई एनवायरनमेंट नहीं मिला।",
      noDescriptionProvided: "कोई विवरण उपलब्ध नहीं है।",
      environmentNameRequired:
        "एनवायरनमेंट का नाम आवश्यक है।",
      couldNotLoadEnvironments:
        "एनवायरनमेंट लोड नहीं किए जा सके।",
      couldNotCreateEnvironment:
        "एनवायरनमेंट बनाया नहीं जा सका।",
      environmentCreated:
        "एनवायरनमेंट सफलतापूर्वक बनाया गया।",
      confirmDeleteEnvironment:
        "क्या आप इस एनवायरनमेंट को हटाना चाहते हैं?",
      couldNotDeleteEnvironment:
        "एनवायरनमेंट हटाया नहीं जा सका।",
      environmentDeleted:
        "एनवायरनमेंट सफलतापूर्वक हटा दिया गया।",
      
      //overrides 
      configuration: "कॉन्फ़िगरेशन",
      environmentOverrides: "एनवायरनमेंट ओवरराइड्स",
      environmentOverridesDescription:
        "विशिष्ट एनवायरनमेंट के लिए फीचर फ्लैग की वैल्यू मैनेज करें।",
      couldNotLoadOverridesData:
        "ओवरराइड डेटा लोड नहीं हो सका।",
      selectFlagAndEnvironment:
        "कृपया फीचर फ्लैग और एनवायरनमेंट चुनें।",
      couldNotCreateOverride:
        "ओवरराइड बनाया नहीं जा सका।",
      confirmDeleteOverride:
        "क्या आप इस ओवरराइड को डिलीट करना चाहते हैं?",
      couldNotDeleteOverride:
        "ओवरराइड डिलीट नहीं किया जा सका।",
      totalOverrides: "कुल ओवरराइड्स",
      activeConfiguration: "सक्रिय कॉन्फ़िगरेशन",
      createOverride: "ओवरराइड बनाएं",
      addEnvironmentOverride: "एनवायरनमेंट ओवरराइड जोड़ें",
      featureFlag: "फीचर फ्लैग",
      selectFeatureFlag: "फीचर फ्लैग चुनें",
      environment: "एनवायरनमेंट",
      selectEnvironment: "एनवायरनमेंट चुनें",
      overrideValue: "ओवरराइड वैल्यू",
      enabledTrue: "सक्षम (True)",
      disabledFalse: "अक्षम (False)",
      createOverrideButton: "ओवरराइड बनाएं",
      existingOverrides: "मौजूदा ओवरराइड्स",
      loading: "लोड हो रहा है...",
      noEnvironmentOverrides:
        "कोई एनवायरनमेंट ओवरराइड नहीं मिला।",
      value: "वैल्यू",
      enabled: "सक्षम",
      disabled: "अक्षम",


      //Audit Logs
      systemActivity: "सिस्टम गतिविधि",
      auditLogsDescription:
        "फीचर फ्लैग में हुए बदलाव और यूज़र गतिविधियों को ट्रैक करें।",
      totalLogs: "कुल लॉग्स",
      logFilters: "लॉग फ़िल्टर",
      filterAuditLogs: "ऑडिट लॉग फ़िल्टर करें",
      allActions: "सभी एक्शन",
      userId: "यूज़र ID",
      flagKey: "फ्लैग की",
      dateFrom: "तारीख से",
      dateTo: "तारीख तक",
      applyFilters: "फ़िल्टर लागू करें",
      clearFilters: "फ़िल्टर साफ़ करें",
      activityHistory: "गतिविधि इतिहास",
      auditLogRecords: "ऑडिट लॉग रिकॉर्ड्स",
      logs: "लॉग्स",
      log: "लॉग",
      id: "ID",
      action: "एक्शन",
      user: "यूज़र",
      flag: "फ्लैग",
      oldValue: "पुरानी वैल्यू",
      newValue: "नई वैल्यू",
      timestamp: "टाइमस्टैम्प",
      details: "विवरण",
      loadingAuditLogs: "ऑडिट लॉग्स लोड हो रहे हैं...",
      noAuditLogsFound: "कोई ऑडिट लॉग नहीं मिला",
      noAuditLogsDescription:
        "अपने फ़िल्टर बदलें या कोई गतिविधि करें।",
      loading: "लोड हो रहा है...",
      viewDetails: "विवरण देखें",
      logDetails: "लॉग विवरण",
      auditLogNumber: "ऑडिट लॉग",
      close: "बंद करें",
      flagId: "फ्लैग ID",
      environmentId: "एनवायरनमेंट ID",
      time: "समय",
      oldState: "पुरानी स्थिति",
      newState: "नई स्थिति",
      closeDetails: "विवरण बंद करें",
      failedToFetchAuditLogs:
        "ऑडिट लॉग्स लोड नहीं हो सके",
      failedToFetchAuditLogDetails:
        "ऑडिट लॉग का विवरण लोड नहीं हो सका",
      

      // groups 
      userManagement: "यूज़र मैनेजमेंट",
      userGroups: "यूज़र ग्रुप्स",
      userGroupsDescription:
        "यूज़र्स को टार्गेटिंग और फीचर एक्सेस के लिए ग्रुप्स में व्यवस्थित करें।",
      searchGroups: "ग्रुप्स खोजें",
      createGroup: "ग्रुप बनाएं",
      groupDirectory: "ग्रुप डायरेक्टरी",
      allGroups: "सभी ग्रुप्स",
      group: "ग्रुप",
      groups: "ग्रुप्स",
      noGroupsFound: "कोई ग्रुप नहीं मिला",
      noGroupsDescription:
        "अभी कोई यूज़र ग्रुप उपलब्ध नहीं है।",
      groupId: "ग्रुप ID",
      created: "बनाया गया",
      actions: "एक्शन",
      userTargetingGroup: "यूज़र टार्गेटिंग ग्रुप",
      viewMembers: "मेंबर्स देखें",
      newGroup: "नया ग्रुप",
      createUserGroup: "यूज़र ग्रुप बनाएं",
      groupName: "ग्रुप का नाम",
      groupNamePlaceholder: "ग्रुप का नाम दर्ज करें",
      groupNameRequired: "ग्रुप का नाम आवश्यक है",
      couldNotLoadGroups: "ग्रुप्स लोड नहीं हो सके",
      couldNotCreateGroup: "ग्रुप बनाया नहीं जा सका",
      groupCreated: "ग्रुप सफलतापूर्वक बनाया गया",
      confirmDeleteGroup:
        "क्या आप इस ग्रुप को डिलीट करना चाहते हैं?",
      couldNotDeleteGroup: "ग्रुप डिलीट नहीं किया जा सका",
      groupDeleted: "ग्रुप सफलतापूर्वक डिलीट किया गया",

      //Group members
      groupNotFound: "ग्रुप नहीं मिला।",
      couldNotLoadGroupMembers:
        "ग्रुप के मेंबर्स लोड नहीं हो सके।",
      userIdRequired:
        "कृपया यूज़र ID दर्ज करें।",
      couldNotAddUser:
        "यूज़र को जोड़ा नहीं जा सका।",
      userAddedSuccessfully:
        "यूज़र सफलतापूर्वक जोड़ा गया।",
      confirmRemoveUser:
        "क्या आप इस यूज़र को हटाना चाहते हैं?",
      couldNotRemoveUser:
        "यूज़र को हटाया नहीं जा सका।",
      userRemovedSuccessfully:
        "यूज़र सफलतापूर्वक हटा दिया गया।",
      backToGroups: "ग्रुप्स पर वापस जाएं",
      groupMembership: "ग्रुप सदस्यता",
      groupMembers: "ग्रुप मेंबर्स",
      groupMembersDescription:
        "इस टार्गेटिंग ग्रुप से जुड़े यूज़र्स को मैनेज करें।",
      totalMembers: "कुल मेंबर्स",
      status: "स्थिति",
      active: "सक्रिय",
      membershipDirectory: "मेंबरशिप डायरेक्टरी",
      members: "मेंबर्स",
      member: "मेंबर",
      userId: "यूज़र ID",
      enterUserId: "यूज़र ID दर्ज करें",
      addUser: "यूज़र जोड़ें",
      noMembersYet: "अभी कोई मेंबर नहीं है",
      adminNoMembersDescription:
        "फीचर टार्गेटिंग के लिए इस ग्रुप में यूज़र जोड़ें।",
      userNoMembersDescription:
        "अभी तक इस ग्रुप में कोई यूज़र नहीं जोड़ा गया है।",
      user: "यूज़र",
      email: "ईमेल",
      action: "एक्शन",
      groupMember: "ग्रुप मेंबर",
      remove: "हटाएं",

      //Evaluation tester 
      flagEvaluation: "फ्लैग इवैल्यूएशन",
      evaluationTester: "इवैल्यूएशन टेस्टर",
      evaluationTesterDescription:
        "किसी विशेष यूज़र और टार्गेटिंग संदर्भ के लिए फीचर फ्लैग कैसे काम करता है, इसे टेस्ट करें।",

      testConfiguration: "टेस्ट कॉन्फ़िगरेशन",
      evaluateFeatureFlag: "फीचर फ्लैग इवैल्यूएट करें",

      featureFlag: "फीचर फ्लैग",
      selectFeatureFlag: "फीचर फ्लैग चुनें",

      environment: "एनवायरनमेंट",
      selectEnvironment: "एनवायरनमेंट चुनें",

      userId: "यूज़र ID",
      userIdExample: "उदाहरण: user_101",

      groups: "ग्रुप्स",
      groupsExample: "उदाहरण: beta_users, internal_team",

      evaluating: "इवैल्यूएट हो रहा है...",
      evaluateFlag: "फ्लैग इवैल्यूएट करें",

      evaluationResult: "इवैल्यूएशन रिज़ल्ट",
      decisionDetails: "निर्णय विवरण",

      rollout: "रोलआउट",
      bucket: "बकेट",
      reason: "कारण",
      finalResult: "अंतिम परिणाम",

      enabled: "सक्षम",
      disabled: "अक्षम",

      howItWasDecided: "निर्णय कैसे लिया गया",
      userEvaluatedFor: "यूज़र",
      wasEvaluatedFor: "के लिए इवैल्यूएट किया गया था",
      evaluationReason: "इवैल्यूएशन का कारण:",
      deterministicBucket: "डिटर्मिनिस्टिक बकेट:",
      andRollout: "और रोलआउट:",
      noRolloutBucket:
        "इस इवैल्यूएशन के लिए किसी रोलआउट बकेट की आवश्यकता नहीं थी।",

      notAuthenticated:
        "ऑथेंटिकेशन नहीं है। कृपया दोबारा लॉगिन करें।",

      sessionExpired:
        "सेशन समाप्त हो गया है। कृपया दोबारा लॉगिन करें।",

      couldNotLoadFlagsEnvironments:
        "फीचर फ्लैग या एनवायरनमेंट लोड नहीं हो सके।",

      selectFlagEnvironmentUser:
        "कृपया फीचर फ्लैग, एनवायरनमेंट चुनें और यूज़र ID दर्ज करें।",

      couldNotEvaluateFlag:
        "फीचर फ्लैग इवैल्यूएट नहीं किया जा सका।",


    },
  },

  // =====================================================
  // MARATHI
  // =====================================================
  mr: {
    translation: {
      language: "भाषा",

      home: "डॅशबोर्ड",
      featureFlags: "फीचर फ्लॅग्स",
      environments: "एन्व्हायर्नमेंट्स",
      groups: "ग्रुप्स",
      targetingRules: "टार्गेटिंग नियम",
      overrides: "ओव्हरराइड्स",
      evaluationTester: "इव्हॅल्युएशन टेस्टर",
      auditLogs: "ऑडिट लॉग्स",
      logout: "लॉगआउट",

      releaseControl: "रिलीज नियंत्रण",
      featureFlagsDescription:
        "फीचर फ्लॅग्स, सक्रियता आणि टक्केवारी आधारित रोलआउट व्यवस्थापित करा.",

      totalFlags: "एकूण फ्लॅग्स",
      enabledFlags: "सक्रिय फ्लॅग्स",
      rolloutEnabled: "सक्रिय रोलआउट",

      flagDirectory: "फ्लॅग सूची",
      allFeatureFlags: "सर्व फीचर फ्लॅग्स",
      createFeatureFlag: "फीचर फ्लॅग तयार करा",

      noFeatureFlags: "कोणतेही फीचर फ्लॅग सापडले नाहीत",
      featureFlagEmptyText:
        "रोलआउट व्यवस्थापित करण्यासाठी फीचर फ्लॅग तयार करा.",

      flag: "फ्लॅग",
      status: "स्थिती",
      rollout: "रोलआउट",
      owner: "मालक",
      action: "कृती",

      enabled: "सक्रिय",
      disabled: "निष्क्रिय",
      viewOnly: "फक्त पाहा",
      delete: "हटवा",

      newFlag: "नवीन फ्लॅग",
      flagKey: "फ्लॅग की",
      type: "प्रकार",
      description: "वर्णन",
      ownerTeam: "मालक टीम",
      rolloutPercentage: "रोलआउट टक्केवारी",
      enableFeatureFlag:
        "हा फीचर फ्लॅग सक्रिय करा",

      cancel: "रद्द करा",
      createFlag: "फ्लॅग तयार करा",

      couldNotLoadFeatureFlags:
        "फीचर फ्लॅग्स लोड करता आले नाहीत.",
      featureFlagKeyRequired:
        "फीचर फ्लॅग की आवश्यक आहे.",
      couldNotCreateFeatureFlag:
        "फीचर फ्लॅग तयार करता आला नाही.",
      featureFlagCreated:
        "फीचर फ्लॅग यशस्वीरित्या तयार केला.",
      couldNotUpdateRollout:
        "रोलआउट टक्केवारी अपडेट करता आली नाही.",
      rolloutUpdated:
        "{{key}} रोलआउट {{percentage}}% वर अपडेट केला.",
      confirmDeleteFeatureFlag:
        "तुम्हाला हा फीचर फ्लॅग हटवायचा आहे का?",
      couldNotDeleteFeatureFlag:
        "फीचर फ्लॅग हटवता आला नाही.",
      featureFlagDeleted:
        "फीचर फ्लॅग यशस्वीरित्या हटवला.",

      flagDescriptionPlaceholder:
        "हा फ्लॅग काय नियंत्रित करतो?",

      // Home / Dashboard
      releaseControlHub: "रिलीज कंट्रोल हब",
      featureManagementConsole: "फीचर मॅनेजमेंट कन्सोल",
      dashboardDescription: "तुमच्या फीचर फ्लॅग्स आणि सिस्टम ॲक्टिव्हिटीचे व्यवस्थापन करा",
      signedInAs: "या नावाने साइन इन केले आहे",
      totalFeatureFlags: "एकूण फीचर फ्लॅग्स",
      activeFlags: "सक्रिय फ्लॅग्स",
      environmentsCount: "एन्व्हायर्नमेंट्स",
      overridesCount: "ओव्हरराइड्स",
      todaysEvaluations: "आजचे इव्हॅल्युएशन्स",
      auditLogsToday: "आजचे ऑडिट लॉग्स",

      evaluationAnalytics: "इव्हॅल्युएशन ॲनालिटिक्स",
      featureFlagEvaluations: "फीचर फ्लॅग इव्हॅल्युएशन्स",
      evaluationActivity: "इव्हॅल्युएशन ॲक्टिव्हिटी",
      totalEvaluations: "एकूण इव्हॅल्युएशन्स",
      loadingAnalytics: "ॲनालिटिक्स लोड होत आहे...",
      noEvaluationData: "इव्हॅल्युएशन डेटा उपलब्ध नाही",
      evaluations: "इव्हॅल्युएशन्स",
      time: "वेळ",

      flagAnalytics: "फ्लॅग ॲनालिटिक्स",
      evaluationsByFeatureFlag: "फीचर फ्लॅगनुसार इव्हॅल्युएशन्स",
      flagEvaluationDescription: "प्रत्येक फीचर फ्लॅगच्या इव्हॅल्युएशनचा आढावा",
      loadingFlagAnalytics: "फ्लॅग ॲनालिटिक्स लोड होत आहे...",
      noFlagAnalytics: "फ्लॅग ॲनालिटिक्स उपलब्ध नाही",
      evaluation: "इव्हॅल्युएशन",
      evaluationsPlural: "इव्हॅल्युएशन्स",

      environmentAnalytics: "एन्व्हायर्नमेंट ॲनालिटिक्स",
      environmentUsage: "एन्व्हायर्नमेंट वापर",
      environmentUsageDescription: "वेगवेगळ्या एन्व्हायर्नमेंट्समधील फीचर फ्लॅग वापर",
      loadingEnvironmentUsage: "एन्व्हायर्नमेंट वापर लोड होत आहे...",
      noEnvironmentUsage: "एन्व्हायर्नमेंट वापर डेटा उपलब्ध नाही",

      auditActivity: "ऑडिट ॲक्टिव्हिटी",
      recentAuditLogs: "अलीकडील ऑडिट लॉग्स",
      latestChanges: "नवीनतम बदल",
      viewAll: "सर्व पहा",
      loadingAuditLogs: "ऑडिट लॉग्स लोड होत आहेत...",
      noAuditActivity: "ऑडिट ॲक्टिव्हिटी उपलब्ध नाही",
      actor: "कर्ता",

      welcome: "स्वागत आहे",
      welcomeTitle: "फीचर मॅनेजमेंट कन्सोलमध्ये स्वागत आहे",
      welcomeDescription: "फीचर फ्लॅग्स, एन्व्हायर्नमेंट्स आणि सिस्टम ॲक्टिव्हिटी व्यवस्थापित करा",
      manageFeatureFlags: "फीचर फ्लॅग्स व्यवस्थापित करा",

      // Groups
      couldNotLoadGroups: "ग्रुप्स लोड करता आले नाहीत",
      groupNameRequired: "ग्रुपचे नाव आवश्यक आहे",
      couldNotCreateGroup: "ग्रुप तयार करता आला नाही",
      groupCreated: "ग्रुप यशस्वीरित्या तयार झाला",
      confirmDeleteGroup: "तुम्हाला हा ग्रुप डिलीट करायचा आहे का?",
      couldNotDeleteGroup: "ग्रुप डिलीट करता आला नाही",
      groupDeleted: "ग्रुप यशस्वीरित्या डिलीट झाला",
      userManagement: "यूजर मॅनेजमेंट",
      userGroups: "यूजर ग्रुप्स",
      userGroupsDescription: "यूजर्सना ग्रुप्समध्ये व्यवस्थापित करा",
      searchGroups: "ग्रुप्स शोधा",
      createGroup: "ग्रुप तयार करा",
      groupDirectory: "ग्रुप डायरेक्टरी",
      allGroups: "सर्व ग्रुप्स",
      groups: "ग्रुप्स",
      group: "ग्रुप",
      noGroupsFound: "कोणतेही ग्रुप सापडले नाहीत",
      noGroupsDescription: "अजून कोणतेही ग्रुप उपलब्ध नाहीत",
      groupId: "ग्रुप ID",
      created: "तयार केले",
      actions: "कृती",
      userTargetingGroup: "यूजर टार्गेटिंग ग्रुप",
      viewMembers: "मेंबर्स पहा",
      delete: "डिलीट",
      newGroup: "नवीन ग्रुप",
      createUserGroup: "यूजर ग्रुप तयार करा",
      groupName: "ग्रुपचे नाव",
      groupNamePlaceholder: "ग्रुपचे नाव प्रविष्ट करा",
      cancel: "रद्द करा",

      // Group Members
      groupNotFound: "ग्रुप सापडला नाही",
      couldNotLoadGroupMembers: "ग्रुप मेंबर्स लोड करता आले नाहीत",
      userIdRequired: "यूजर ID आवश्यक आहे",
      couldNotAddUser: "यूजर जोडता आला नाही",
      userAddedSuccessfully: "यूजर यशस्वीरित्या जोडला",
      confirmRemoveUser: "तुम्हाला हा यूजर काढायचा आहे का?",
      couldNotRemoveUser: "यूजर काढता आला नाही",
      userRemovedSuccessfully: "यूजर यशस्वीरित्या काढला",
      backToGroups: "ग्रुप्सकडे परत जा",
      groupMembership: "ग्रुप मेंबरशिप",
      groupMembers: "ग्रुप मेंबर्स",
      groupMembersDescription: "या ग्रुपमधील मेंबर्स व्यवस्थापित करा",
      totalMembers: "एकूण मेंबर्स",
      status: "स्थिती",
      active: "सक्रिय",
      membershipDirectory: "मेंबरशिप डायरेक्टरी",
      members: "मेंबर्स",
      member: "मेंबर",
      enterUserId: "यूजर ID प्रविष्ट करा",
      addUser: "यूजर जोडा",
      noMembersYet: "अजून कोणतेही मेंबर्स नाहीत",
      adminNoMembersDescription: "या ग्रुपमध्ये अजून मेंबर्स जोडलेले नाहीत",
      userNoMembersDescription: "या ग्रुपमध्ये सध्या कोणतेही मेंबर्स नाहीत",
      user: "यूजर",
      email: "ईमेल",
      action: "कृती",
      groupMember: "ग्रुप मेंबर",
      remove: "काढा",

      // Evaluation Tester
      flagEvaluation: "फ्लॅग इव्हॅल्युएशन",
      evaluationTester: "इव्हॅल्युएशन टेस्टर",
      evaluationTesterDescription: "फीचर फ्लॅगचे इव्हॅल्युएशन टेस्ट करा",
      testConfiguration: "टेस्ट कॉन्फिगरेशन",
      evaluateFeatureFlag: "फीचर फ्लॅग इव्हॅल्युएट करा",
      selectFeatureFlag: "फीचर फ्लॅग निवडा",
      selectEnvironment: "एन्व्हायर्नमेंट निवडा",
      userIdExample: "उदा. 123",
      groupsExample: "उदा. developers",
      evaluating: "इव्हॅल्युएट होत आहे...",
      evaluateFlag: "फ्लॅग इव्हॅल्युएट करा",
      evaluationResult: "इव्हॅल्युएशन रिझल्ट",
      decisionDetails: "निर्णयाचे तपशील",
      rollout: "रोलआउट",
      bucket: "बकेट",
      reason: "कारण",
      finalResult: "अंतिम निकाल",
      enabled: "सक्रिय",
      disabled: "निष्क्रिय",
      howItWasDecided: "निर्णय कसा घेण्यात आला",
      userEvaluatedFor: "यूजरसाठी इव्हॅल्युएशन",
      wasEvaluatedFor: "यासाठी इव्हॅल्युएट करण्यात आले",
      evaluationReason: "इव्हॅल्युएशनचे कारण",
      deterministicBucket: "डिटर्मिनिस्टिक बकेट",
      andRollout: "आणि रोलआउट",
      noRolloutBucket: "रोलआउट नसल्यामुळे बकेट नाही",
      notAuthenticated: "ऑथेंटिकेटेड नाही",
      sessionExpired: "सेशन एक्सपायर झाले",
      couldNotLoadFlagsEnvironments: "फ्लॅग्स आणि एन्व्हायर्नमेंट्स लोड करता आले नाहीत",
      selectFlagEnvironmentUser: "फ्लॅग, एन्व्हायर्नमेंट आणि यूजर निवडा",
      couldNotEvaluateFlag: "फ्लॅग इव्हॅल्युएट करता आला नाही",

      // Environments
      configuration: "कॉन्फिगरेशन",
      environmentsDescription: "तुमच्या फीचर फ्लॅगसाठी एन्व्हायर्नमेंट्स व्यवस्थापित करा",
      couldNotLoadEnvironments: "एन्व्हायर्नमेंट्स लोड करता आले नाहीत",
      environmentNameRequired: "एन्व्हायर्नमेंटचे नाव आवश्यक आहे",
      couldNotCreateEnvironment: "एन्व्हायर्नमेंट तयार करता आले नाही",
      environmentCreated: "एन्व्हायर्नमेंट यशस्वीरित्या तयार झाले",
      confirmDeleteEnvironment: "तुम्हाला हे एन्व्हायर्नमेंट डिलीट करायचे आहे का?",
      couldNotDeleteEnvironment: "एन्व्हायर्नमेंट डिलीट करता आले नाही",
      environmentDeleted: "एन्व्हायर्नमेंट यशस्वीरित्या डिलीट झाले",
      totalEnvironments: "एकूण एन्व्हायर्नमेंट्स",
      available: "उपलब्ध",
      createEnvironment: "एन्व्हायर्नमेंट तयार करा",
      addEnvironment: "एन्व्हायर्नमेंट जोडा",
      environmentName: "एन्व्हायर्नमेंटचे नाव",
      environmentNamePlaceholder: "उदा. Production",
      description: "वर्णन",
      environmentDescriptionPlaceholder: "एन्व्हायर्नमेंटचे वर्णन प्रविष्ट करा",
      createEnvironmentButton: "एन्व्हायर्नमेंट तयार करा",
      environmentDirectory: "एन्व्हायर्नमेंट डायरेक्टरी",
      allEnvironments: "सर्व एन्व्हायर्नमेंट्स",
      loadingEnvironments: "एन्व्हायर्नमेंट्स लोड होत आहेत...",
      noEnvironmentsFound: "कोणतेही एन्व्हायर्नमेंट सापडले नाही",
      noDescriptionProvided: "वर्णन दिलेले नाही",

      // Overrides
      environmentOverrides: "एन्व्हायर्नमेंट ओव्हरराइड्स",
      environmentOverridesDescription: "वेगवेगळ्या एन्व्हायर्नमेंटसाठी फीचर फ्लॅगचे मूल्य व्यवस्थापित करा",
      couldNotLoadOverridesData: "ओव्हरराइड डेटा लोड करता आला नाही",
      selectFlagAndEnvironment: "फ्लॅग आणि एन्व्हायर्नमेंट निवडा",
      couldNotCreateOverride: "ओव्हरराइड तयार करता आला नाही",
      confirmDeleteOverride: "तुम्हाला हा ओव्हरराइड डिलीट करायचा आहे का?",
      couldNotDeleteOverride: "ओव्हरराइड डिलीट करता आला नाही",
      totalOverrides: "एकूण ओव्हरराइड्स",
      activeConfiguration: "सक्रिय कॉन्फिगरेशन",
      createOverride: "ओव्हरराइड तयार करा",
      addEnvironmentOverride: "एन्व्हायर्नमेंट ओव्हरराइड जोडा",
      overrideValue: "ओव्हरराइड मूल्य",
      enabledTrue: "सक्रिय (True)",
      disabledFalse: "निष्क्रिय (False)",
      createOverrideButton: "ओव्हरराइड तयार करा",
      existingOverrides: "विद्यमान ओव्हरराइड्स",
      loading: "लोड होत आहे...",
      noEnvironmentOverrides: "कोणतेही एन्व्हायर्नमेंट ओव्हरराइड्स नाहीत",
      value: "मूल्य",

      // Audit Logs
      systemActivity: "सिस्टम ॲक्टिव्हिटी",
      auditLogsDescription: "सिस्टममधील सर्व बदल आणि ॲक्टिव्हिटी पहा",
      totalLogs: "एकूण लॉग्स",
      logFilters: "लॉग फिल्टर्स",
      filterAuditLogs: "ऑडिट लॉग्स फिल्टर करा",
      allActions: "सर्व कृती",
      flagKey: "फ्लॅग की",
      dateFrom: "या तारखेपासून",
      dateTo: "या तारखेपर्यंत",
      applyFilters: "फिल्टर लागू करा",
      clearFilters: "फिल्टर साफ करा",
      activityHistory: "ॲक्टिव्हिटी हिस्ट्री",
      auditLogRecords: "ऑडिट लॉग रेकॉर्ड्स",
      logs: "लॉग्स",
      log: "लॉग",
      id: "ID",
      flag: "फ्लॅग",
      oldValue: "जुने मूल्य",
      newValue: "नवीन मूल्य",
      timestamp: "टाइमस्टॅम्प",
      details: "तपशील",
      loadingAuditLogs: "ऑडिट लॉग्स लोड होत आहेत...",
      noAuditLogsFound: "कोणतेही ऑडिट लॉग सापडले नाहीत",
      noAuditLogsDescription: "या फिल्टरसाठी कोणतेही ऑडिट लॉग उपलब्ध नाहीत",
      loading: "लोड होत आहे",
      viewDetails: "तपशील पहा",
      logDetails: "लॉग तपशील",
      auditLogNumber: "ऑडिट लॉग #",
      close: "बंद करा",
      flagId: "फ्लॅग ID",
      environmentId: "एन्व्हायर्नमेंट ID",
      oldState: "जुनी स्थिती",
      newState: "नवीन स्थिती",
      closeDetails: "तपशील बंद करा",
      failedToFetchAuditLogs: "ऑडिट लॉग्स मिळवता आले नाहीत",
      failedToFetchAuditLogDetails: "ऑडिट लॉग तपशील मिळवता आला नाही"

      
    },
  },

  // =====================================================
  // GUJARATI
  // =====================================================
  gu: {
    translation: {
      language: "ભાષા",

      home: "ડેશબોર્ડ",
      featureFlags: "ફીચર ફ્લેગ્સ",
      environments: "એન્વાયરમેન્ટ્સ",
      groups: "ગ્રુપ્સ",
      targetingRules: "ટાર્ગેટિંગ નિયમો",
      overrides: "ઓવરરાઇડ્સ",
      evaluationTester: "ઇવેલ્યુએશન ટેસ્ટર",
      auditLogs: "ઓડિટ લોગ્સ",
      logout: "લૉગઆઉટ",

      releaseControl: "રિલીઝ કંટ્રોલ",
      featureFlagsDescription:
        "ફીચર ફ્લેગ્સ, સક્રિયકરણ અને ટકાવારી આધારિત રોલઆઉટ મેનેજ કરો.",

      totalFlags: "કુલ ફ્લેગ્સ",
      enabledFlags: "સક્રિય ફ્લેગ્સ",
      rolloutEnabled: "સક્રિય રોલઆઉટ",

      flagDirectory: "ફ્લેગ સૂચિ",
      allFeatureFlags: "બધા ફીચર ફ્લેગ્સ",
      createFeatureFlag: "ફીચર ફ્લેગ બનાવો",

      noFeatureFlags: "કોઈ ફીચર ફ્લેગ મળ્યા નથી",
      featureFlagEmptyText:
        "રોલઆઉટ મેનેજ કરવા માટે ફીચર ફ્લેગ બનાવો.",

      flag: "ફ્લેગ",
      status: "સ્થિતિ",
      rollout: "રોલઆઉટ",
      owner: "માલિક",
      action: "ક્રિયા",

      enabled: "સક્રિય",
      disabled: "નિષ્ક્રિય",
      viewOnly: "ફક્ત જુઓ",
      delete: "કાઢી નાખો",

      newFlag: "નવો ફ્લેગ",
      flagKey: "ફ્લેગ કી",
      type: "પ્રકાર",
      description: "વર્ણન",
      ownerTeam: "માલિક ટીમ",
      rolloutPercentage: "રોલઆઉટ ટકાવારી",
      enableFeatureFlag:
        "આ ફીચર ફ્લેગ સક્રિય કરો",

      cancel: "રદ કરો",
      createFlag: "ફ્લેગ બનાવો",

      couldNotLoadFeatureFlags:
        "ફીચર ફ્લેગ્સ લોડ થઈ શક્યા નથી.",
      featureFlagKeyRequired:
        "ફીચર ફ્લેગ કી જરૂરી છે.",
      couldNotCreateFeatureFlag:
        "ફીચર ફ્લેગ બનાવી શકાયો નથી.",
      featureFlagCreated:
        "ફીચર ફ્લેગ સફળતાપૂર્વક બનાવવામાં આવ્યો.",
      couldNotUpdateRollout:
        "રોલઆઉટ ટકાવારી અપડેટ થઈ શકી નથી.",
      rolloutUpdated:
        "{{key}} રોલઆઉટ {{percentage}}% પર અપડેટ થયો.",
      confirmDeleteFeatureFlag:
        "શું તમે ખરેખર આ ફીચર ફ્લેગ કાઢી નાખવા માંગો છો?",
      couldNotDeleteFeatureFlag:
        "ફીચર ફ્લેગ કાઢી શકાયો નથી.",
      featureFlagDeleted:
        "ફીચર ફ્લેગ સફળતાપૂર્વક કાઢી નાખવામાં આવ્યો.",

      flagDescriptionPlaceholder:
        "આ ફ્લેગ શું નિયંત્રિત કરે છે?",

      // Home / Dashboard
      releaseControlHub: "રિલીઝ કંટ્રોલ હબ",
      featureManagementConsole: "ફીચર મેનેજમેન્ટ કન્સોલ",
      dashboardDescription: "તમારા ફીચર ફ્લેગ્સ અને સિસ્ટમ એક્ટિવિટી મેનેજ કરો",
      signedInAs: "આ તરીકે સાઇન ઇન કર્યું છે",
      totalFeatureFlags: "કુલ ફીચર ફ્લેગ્સ",
      activeFlags: "સક્રિય ફ્લેગ્સ",
      environmentsCount: "એન્વાયરમેન્ટ્સ",
      overridesCount: "ઓવરરાઇડ્સ",
      todaysEvaluations: "આજના ઇવેલ્યુએશન્સ",
      auditLogsToday: "આજના ઓડિટ લોગ્સ",

      evaluationAnalytics: "ઇવેલ્યુએશન એનાલિટિક્સ",
      featureFlagEvaluations: "ફીચર ફ્લેગ ઇવેલ્યુએશન્સ",
      evaluationActivity: "ઇવેલ્યુએશન એક્ટિવિટી",
      totalEvaluations: "કુલ ઇવેલ્યુએશન્સ",
      loadingAnalytics: "એનાલિટિક્સ લોડ થઈ રહ્યું છે...",
      noEvaluationData: "કોઈ ઇવેલ્યુએશન ડેટા ઉપલબ્ધ નથી",
      evaluations: "ઇવેલ્યુએશન્સ",
      time: "સમય",

      flagAnalytics: "ફ્લેગ એનાલિટિક્સ",
      evaluationsByFeatureFlag: "ફીચર ફ્લેગ પ્રમાણે ઇવેલ્યુએશન્સ",
      flagEvaluationDescription: "દરેક ફીચર ફ્લેગના ઇવેલ્યુએશનનો આકલન",
      loadingFlagAnalytics: "ફ્લેગ એનાલિટિક્સ લોડ થઈ રહ્યું છે...",
      noFlagAnalytics: "ફ્લેગ એનાલિટિક્સ ઉપલબ્ધ નથી",
      evaluation: "ઇવેલ્યુએશન",
      evaluationsPlural: "ઇવેલ્યુએશન્સ",

      environmentAnalytics: "એન્વાયરમેન્ટ એનાલિટિક્સ",
      environmentUsage: "એન્વાયરમેન્ટ ઉપયોગ",
      environmentUsageDescription: "વિવિધ એન્વાયરમેન્ટમાં ફીચર ફ્લેગનો ઉપયોગ",
      loadingEnvironmentUsage: "એન્વાયરમેન્ટ ઉપયોગ લોડ થઈ રહ્યો છે...",
      noEnvironmentUsage: "એન્વાયરમેન્ટ ઉપયોગનો ડેટા ઉપલબ્ધ નથી",

      auditActivity: "ઓડિટ એક્ટિવિટી",
      recentAuditLogs: "તાજેતરના ઓડિટ લોગ્સ",
      latestChanges: "તાજેતરના ફેરફારો",
      viewAll: "બધું જુઓ",
      loadingAuditLogs: "ઓડિટ લોગ્સ લોડ થઈ રહ્યા છે...",
      noAuditActivity: "કોઈ ઓડિટ એક્ટિવિટી ઉપલબ્ધ નથી",
      actor: "કર્તા",

      welcome: "સ્વાગત છે",
      welcomeTitle: "ફીચર મેનેજમેન્ટ કન્સોલમાં સ્વાગત છે",
      welcomeDescription: "ફીચર ફ્લેગ્સ, એન્વાયરમેન્ટ્સ અને સિસ્ટમ એક્ટિવિટી મેનેજ કરો",
      manageFeatureFlags: "ફીચર ફ્લેગ્સ મેનેજ કરો",

      // Groups
      couldNotLoadGroups: "ગ્રુપ્સ લોડ કરી શકાયા નથી",
      groupNameRequired: "ગ્રુપનું નામ જરૂરી છે",
      couldNotCreateGroup: "ગ્રુપ બનાવી શકાયું નથી",
      groupCreated: "ગ્રુપ સફળતાપૂર્વક બનાવાયું",
      confirmDeleteGroup: "શું તમે આ ગ્રુપ ડિલીટ કરવા માંગો છો?",
      couldNotDeleteGroup: "ગ્રુપ ડિલીટ કરી શકાયું નથી",
      groupDeleted: "ગ્રુપ સફળતાપૂર્વક ડિલીટ થયું",
      userManagement: "યુઝર મેનેજમેન્ટ",
      userGroups: "યુઝર ગ્રુપ્સ",
      userGroupsDescription: "યુઝર્સને ગ્રુપ્સમાં મેનેજ કરો",
      searchGroups: "ગ્રુપ્સ શોધો",
      createGroup: "ગ્રુપ બનાવો",
      groupDirectory: "ગ્રુપ ડિરેક્ટરી",
      allGroups: "બધા ગ્રુપ્સ",
      groups: "ગ્રુપ્સ",
      group: "ગ્રુપ",
      noGroupsFound: "કોઈ ગ્રુપ મળ્યા નથી",
      noGroupsDescription: "હજુ કોઈ ગ્રુપ ઉપલબ્ધ નથી",
      groupId: "ગ્રુપ ID",
      created: "બનાવ્યું",
      actions: "ક્રિયાઓ",
      userTargetingGroup: "યુઝર ટાર્ગેટિંગ ગ્રુપ",
      viewMembers: "મેમ્બર્સ જુઓ",
      delete: "ડિલીટ",
      newGroup: "નવું ગ્રુપ",
      createUserGroup: "યુઝર ગ્રુપ બનાવો",
      groupName: "ગ્રુપનું નામ",
      groupNamePlaceholder: "ગ્રુપનું નામ દાખલ કરો",
      cancel: "રદ કરો",

      // Group Members
      groupNotFound: "ગ્રુપ મળ્યું નથી",
      couldNotLoadGroupMembers: "ગ્રુપ મેમ્બર્સ લોડ કરી શકાયા નથી",
      userIdRequired: "યુઝર ID જરૂરી છે",
      couldNotAddUser: "યુઝર ઉમેરી શકાયો નથી",
      userAddedSuccessfully: "યુઝર સફળતાપૂર્વક ઉમેરાયો",
      confirmRemoveUser: "શું તમે આ યુઝરને દૂર કરવા માંગો છો?",
      couldNotRemoveUser: "યુઝર દૂર કરી શકાયો નથી",
      userRemovedSuccessfully: "યુઝર સફળતાપૂર્વક દૂર થયો",
      backToGroups: "ગ્રુપ્સ પર પાછા જાઓ",
      groupMembership: "ગ્રુપ મેમ્બરશિપ",
      groupMembers: "ગ્રુપ મેમ્બર્સ",
      groupMembersDescription: "આ ગ્રુપના મેમ્બર્સ મેનેજ કરો",
      totalMembers: "કુલ મેમ્બર્સ",
      status: "સ્થિતિ",
      active: "સક્રિય",
      membershipDirectory: "મેમ્બરશિપ ડિરેક્ટરી",
      members: "મેમ્બર્સ",
      member: "મેમ્બર",
      enterUserId: "યુઝર ID દાખલ કરો",
      addUser: "યુઝર ઉમેરો",
      noMembersYet: "હજુ કોઈ મેમ્બર નથી",
      adminNoMembersDescription: "આ ગ્રુપમાં હજુ કોઈ મેમ્બર ઉમેરાયેલ નથી",
      userNoMembersDescription: "આ ગ્રુપમાં હાલમાં કોઈ મેમ્બર નથી",
      user: "યુઝર",
      email: "ઈમેલ",
      action: "ક્રિયા",
      groupMember: "ગ્રુપ મેમ્બર",
      remove: "દૂર કરો",

      // Evaluation Tester
      flagEvaluation: "ફ્લેગ ઇવેલ્યુએશન",
      evaluationTester: "ઇવેલ્યુએશન ટેસ્ટર",
      evaluationTesterDescription: "ફીચર ફ્લેગનું ઇવેલ્યુએશન ટેસ્ટ કરો",
      testConfiguration: "ટેસ્ટ કન્ફિગરેશન",
      evaluateFeatureFlag: "ફીચર ફ્લેગનું ઇવેલ્યુએશન કરો",
      selectFeatureFlag: "ફીચર ફ્લેગ પસંદ કરો",
      selectEnvironment: "એન્વાયરમેન્ટ પસંદ કરો",
      userIdExample: "દા.ત. 123",
      groupsExample: "દા.ત. developers",
      evaluating: "ઇવેલ્યુએટ થઈ રહ્યું છે...",
      evaluateFlag: "ફ્લેગ ઇવેલ્યુએટ કરો",
      evaluationResult: "ઇવેલ્યુએશન પરિણામ",
      decisionDetails: "નિર્ણયની વિગતો",
      rollout: "રોલઆઉટ",
      bucket: "બકેટ",
      reason: "કારણ",
      finalResult: "અંતિમ પરિણામ",
      enabled: "સક્રિય",
      disabled: "નિષ્ક્રિય",
      howItWasDecided: "નિર્ણય કેવી રીતે લેવામાં આવ્યો",
      userEvaluatedFor: "યુઝર માટે ઇવેલ્યુએશન",
      wasEvaluatedFor: "આ માટે ઇવેલ્યુએટ કરવામાં આવ્યું",
      evaluationReason: "ઇવેલ્યુએશનનું કારણ",
      deterministicBucket: "ડિટર્મિનિસ્ટિક બકેટ",
      andRollout: "અને રોલઆઉટ",
      noRolloutBucket: "રોલઆઉટ ન હોવાથી બકેટ નથી",
      notAuthenticated: "ઓથેન્ટિકેટેડ નથી",
      sessionExpired: "સેશન એક્સપાયર થઈ ગયું",
      couldNotLoadFlagsEnvironments: "ફ્લેગ્સ અને એન્વાયરમેન્ટ્સ લોડ કરી શકાયા નથી",
      selectFlagEnvironmentUser: "ફ્લેગ, એન્વાયરમેન્ટ અને યુઝર પસંદ કરો",
      couldNotEvaluateFlag: "ફ્લેગનું ઇવેલ્યુએશન થઈ શક્યું નથી",

      // Environments
      configuration: "કન્ફિગરેશન",
      environmentsDescription: "તમારા ફીચર ફ્લેગ્સ માટે એન્વાયરમેન્ટ્સ મેનેજ કરો",
      couldNotLoadEnvironments: "એન્વાયરમેન્ટ્સ લોડ કરી શકાયા નથી",
      environmentNameRequired: "એન્વાયરમેન્ટનું નામ જરૂરી છે",
      couldNotCreateEnvironment: "એન્વાયરમેન્ટ બનાવી શકાયું નથી",
      environmentCreated: "એન્વાયરમેન્ટ સફળતાપૂર્વક બનાવાયું",
      confirmDeleteEnvironment: "શું તમે આ એન્વાયરમેન્ટ ડિલીટ કરવા માંગો છો?",
      couldNotDeleteEnvironment: "એન્વાયરમેન્ટ ડિલીટ કરી શકાયું નથી",
      environmentDeleted: "એન્વાયરમેન્ટ સફળતાપૂર્વક ડિલીટ થયું",
      totalEnvironments: "કુલ એન્વાયરમેન્ટ્સ",
      available: "ઉપલબ્ધ",
      createEnvironment: "એન્વાયરમેન્ટ બનાવો",
      addEnvironment: "એન્વાયરમેન્ટ ઉમેરો",
      environmentName: "એન્વાયરમેન્ટનું નામ",
      environmentNamePlaceholder: "દા.ત. Production",
      description: "વર્ણન",
      environmentDescriptionPlaceholder: "એન્વાયરમેન્ટનું વર્ણન દાખલ કરો",
      createEnvironmentButton: "એન્વાયરમેન્ટ બનાવો",
      environmentDirectory: "એન્વાયરમેન્ટ ડિરેક્ટરી",
      allEnvironments: "બધા એન્વાયરમેન્ટ્સ",
      loadingEnvironments: "એન્વાયરમેન્ટ્સ લોડ થઈ રહ્યા છે...",
      noEnvironmentsFound: "કોઈ એન્વાયરમેન્ટ મળ્યું નથી",
      noDescriptionProvided: "કોઈ વર્ણન આપવામાં આવ્યું નથી",

      // Overrides
      environmentOverrides: "એન્વાયરમેન્ટ ઓવરરાઇડ્સ",
      environmentOverridesDescription: "વિવિધ એન્વાયરમેન્ટ માટે ફીચર ફ્લેગનું મૂલ્ય મેનેજ કરો",
      couldNotLoadOverridesData: "ઓવરરાઇડ ડેટા લોડ થઈ શક્યો નથી",
      selectFlagAndEnvironment: "ફ્લેગ અને એન્વાયરમેન્ટ પસંદ કરો",
      couldNotCreateOverride: "ઓવરરાઇડ બનાવી શકાયું નથી",
      confirmDeleteOverride: "શું તમે આ ઓવરરાઇડ ડિલીટ કરવા માંગો છો?",
      couldNotDeleteOverride: "ઓવરરાઇડ ડિલીટ કરી શકાયું નથી",
      totalOverrides: "કુલ ઓવરરાઇડ્સ",
      activeConfiguration: "સક્રિય કન્ફિગરેશન",
      createOverride: "ઓવરરાઇડ બનાવો",
      addEnvironmentOverride: "એન્વાયરમેન્ટ ઓવરરાઇડ ઉમેરો",
      overrideValue: "ઓવરરાઇડ મૂલ્ય",
      enabledTrue: "સક્રિય (True)",
      disabledFalse: "નિષ્ક્રિય (False)",
      createOverrideButton: "ઓવરરાઇડ બનાવો",
      existingOverrides: "હાલના ઓવરરાઇડ્સ",
      loading: "લોડ થઈ રહ્યું છે...",
      noEnvironmentOverrides: "કોઈ એન્વાયરમેન્ટ ઓવરરાઇડ્સ નથી",
      value: "મૂલ્ય",

      // Audit Logs
      systemActivity: "સિસ્ટમ એક્ટિવિટી",
      auditLogsDescription: "સિસ્ટમમાં થયેલા તમામ ફેરફારો અને એક્ટિવિટી જુઓ",
      totalLogs: "કુલ લોગ્સ",
      logFilters: "લોગ ફિલ્ટર્સ",
      filterAuditLogs: "ઓડિટ લોગ્સ ફિલ્ટર કરો",
      allActions: "બધી ક્રિયાઓ",
      flagKey: "ફ્લેગ કી",
      dateFrom: "આ તારીખથી",
      dateTo: "આ તારીખ સુધી",
      applyFilters: "ફિલ્ટર્સ લાગુ કરો",
      clearFilters: "ફિલ્ટર્સ સાફ કરો",
      activityHistory: "એક્ટિવિટી હિસ્ટ્રી",
      auditLogRecords: "ઓડિટ લોગ રેકોર્ડ્સ",
      logs: "લોગ્સ",
      log: "લોગ",
      id: "ID",
      flag: "ફ્લેગ",
      oldValue: "જૂનું મૂલ્ય",
      newValue: "નવું મૂલ્ય",
      timestamp: "ટાઇમસ્ટેમ્પ",
      details: "વિગતો",
      loadingAuditLogs: "ઓડિટ લોગ્સ લોડ થઈ રહ્યા છે...",
      noAuditLogsFound: "કોઈ ઓડિટ લોગ મળ્યા નથી",
      noAuditLogsDescription: "આ ફિલ્ટર માટે કોઈ ઓડિટ લોગ ઉપલબ્ધ નથી",
      loading: "લોડ થઈ રહ્યું છે",
      viewDetails: "વિગતો જુઓ",
      logDetails: "લોગની વિગતો",
      auditLogNumber: "ઓડિટ લોગ #",
      close: "બંધ કરો",
      flagId: "ફ્લેગ ID",
      environmentId: "એન્વાયરમેન્ટ ID",
      oldState: "જૂની સ્થિતિ",
      newState: "નવી સ્થિતિ",
      closeDetails: "વિગતો બંધ કરો",
      failedToFetchAuditLogs: "ઓડિટ લોગ્સ મેળવી શકાયા નથી",
      failedToFetchAuditLogDetails: "ઓડિટ લોગની વિગતો મેળવી શકાઈ નથી"
    },
  },

  // =====================================================
  // BENGALI
  // =====================================================
  bn: {
    translation: {
      language: "ভাষা",

      home: "ড্যাশবোর্ড",
      featureFlags: "ফিচার ফ্ল্যাগ",
      environments: "এনভায়রনমেন্ট",
      groups: "গ্রুপ",
      targetingRules: "টার্গেটিং নিয়ম",
      overrides: "ওভাররাইড",
      evaluationTester: "ইভ্যালুয়েশন টেস্টার",
      auditLogs: "অডিট লগ",
      logout: "লগআউট",

      releaseControl: "রিলিজ কন্ট্রোল",
      featureFlagsDescription:
        "ফিচার ফ্ল্যাগ, সক্রিয়করণ এবং শতাংশ ভিত্তিক রোলআউট পরিচালনা করুন।",

      totalFlags: "মোট ফ্ল্যাগ",
      enabledFlags: "সক্রিয় ফ্ল্যাগ",
      rolloutEnabled: "সক্রিয় রোলআউট",

      flagDirectory: "ফ্ল্যাগ তালিকা",
      allFeatureFlags: "সমস্ত ফিচার ফ্ল্যাগ",
      createFeatureFlag: "ফিচার ফ্ল্যাগ তৈরি করুন",

      noFeatureFlags: "কোনও ফিচার ফ্ল্যাগ পাওয়া যায়নি",
      featureFlagEmptyText:
        "রোলআউট পরিচালনা শুরু করতে একটি ফিচার ফ্ল্যাগ তৈরি করুন।",

      flag: "ফ্ল্যাগ",
      status: "স্ট্যাটাস",
      rollout: "রোলআউট",
      owner: "মালিক",
      action: "অ্যাকশন",

      enabled: "সক্রিয়",
      disabled: "নিষ্ক্রিয়",
      viewOnly: "শুধু দেখুন",
      delete: "মুছে ফেলুন",

      newFlag: "নতুন ফ্ল্যাগ",
      flagKey: "ফ্ল্যাগ কী",
      type: "ধরন",
      description: "বিবরণ",
      ownerTeam: "মালিক দল",
      rolloutPercentage: "রোলআউট শতাংশ",
      enableFeatureFlag:
        "এই ফিচার ফ্ল্যাগ সক্রিয় করুন",

      cancel: "বাতিল",
      createFlag: "ফ্ল্যাগ তৈরি করুন",

      couldNotLoadFeatureFlags:
        "ফিচার ফ্ল্যাগ লোড করা যায়নি।",
      featureFlagKeyRequired:
        "ফিচার ফ্ল্যাগ কী প্রয়োজন।",
      couldNotCreateFeatureFlag:
        "ফিচার ফ্ল্যাগ তৈরি করা যায়নি।",
      featureFlagCreated:
        "ফিচার ফ্ল্যাগ সফলভাবে তৈরি হয়েছে।",
      couldNotUpdateRollout:
        "রোলআউট শতাংশ আপডেট করা যায়নি।",
      rolloutUpdated:
        "{{key}} রোলআউট {{percentage}}%-এ আপডেট হয়েছে।",
      confirmDeleteFeatureFlag:
        "আপনি কি সত্যিই এই ফিচার ফ্ল্যাগটি মুছে ফেলতে চান?",
      couldNotDeleteFeatureFlag:
        "ফিচার ফ্ল্যাগ মুছে ফেলা যায়নি।",
      featureFlagDeleted:
        "ফিচার ফ্ল্যাগ সফলভাবে মুছে ফেলা হয়েছে।",

      flagDescriptionPlaceholder:
        "এই ফ্ল্যাগটি কী নিয়ন্ত্রণ করে?",

      // Home / Dashboard
      releaseControlHub: "রিলিজ কন্ট্রোল হাব",
      featureManagementConsole: "ফিচার ম্যানেজমেন্ট কনসোল",
      dashboardDescription: "আপনার ফিচার ফ্ল্যাগ এবং সিস্টেম অ্যাক্টিভিটি পরিচালনা করুন",
      signedInAs: "এই হিসেবে সাইন ইন করা হয়েছে",
      totalFeatureFlags: "মোট ফিচার ফ্ল্যাগ",
      activeFlags: "সক্রিয় ফ্ল্যাগ",
      environmentsCount: "এনভায়রনমেন্ট",
      overridesCount: "ওভাররাইড",
      todaysEvaluations: "আজকের ইভ্যালুয়েশন",
      auditLogsToday: "আজকের অডিট লগ",

      evaluationAnalytics: "ইভ্যালুয়েশন অ্যানালিটিক্স",
      featureFlagEvaluations: "ফিচার ফ্ল্যাগ ইভ্যালুয়েশন",
      evaluationActivity: "ইভ্যালুয়েশন অ্যাক্টিভিটি",
      totalEvaluations: "মোট ইভ্যালুয়েশন",
      loadingAnalytics: "অ্যানালিটিক্স লোড হচ্ছে...",
      noEvaluationData: "কোনো ইভ্যালুয়েশন ডেটা নেই",
      evaluations: "ইভ্যালুয়েশন",
      time: "সময়",

      flagAnalytics: "ফ্ল্যাগ অ্যানালিটিক্স",
      evaluationsByFeatureFlag: "ফিচার ফ্ল্যাগ অনুযায়ী ইভ্যালুয়েশন",
      flagEvaluationDescription: "প্রতিটি ফিচার ফ্ল্যাগের ইভ্যালুয়েশনের ওভারভিউ",
      loadingFlagAnalytics: "ফ্ল্যাগ অ্যানালিটিক্স লোড হচ্ছে...",
      noFlagAnalytics: "কোনো ফ্ল্যাগ অ্যানালিটিক্স নেই",
      evaluation: "ইভ্যালুয়েশন",
      evaluationsPlural: "ইভ্যালুয়েশন",

      environmentAnalytics: "এনভায়রনমেন্ট অ্যানালিটিক্স",
      environmentUsage: "এনভায়রনমেন্ট ব্যবহার",
      environmentUsageDescription: "বিভিন্ন এনভায়রনমেন্টে ফিচার ফ্ল্যাগের ব্যবহার",
      loadingEnvironmentUsage: "এনভায়রনমেন্ট ব্যবহার লোড হচ্ছে...",
      noEnvironmentUsage: "এনভায়রনমেন্ট ব্যবহারের কোনো ডেটা নেই",

      auditActivity: "অডিট অ্যাক্টিভিটি",
      recentAuditLogs: "সাম্প্রতিক অডিট লগ",
      latestChanges: "সাম্প্রতিক পরিবর্তন",
      viewAll: "সব দেখুন",
      loadingAuditLogs: "অডিট লগ লোড হচ্ছে...",
      noAuditActivity: "কোনো অডিট অ্যাক্টিভিটি নেই",
      actor: "ব্যবহারকারী",

      welcome: "স্বাগতম",
      welcomeTitle: "ফিচার ম্যানেজমেন্ট কনসোলে স্বাগতম",
      welcomeDescription: "ফিচার ফ্ল্যাগ, এনভায়রনমেন্ট এবং সিস্টেম অ্যাক্টিভিটি পরিচালনা করুন",
      manageFeatureFlags: "ফিচার ফ্ল্যাগ পরিচালনা করুন",

      // Groups
      couldNotLoadGroups: "গ্রুপ লোড করা যায়নি",
      groupNameRequired: "গ্রুপের নাম প্রয়োজন",
      couldNotCreateGroup: "গ্রুপ তৈরি করা যায়নি",
      groupCreated: "গ্রুপ সফলভাবে তৈরি হয়েছে",
      confirmDeleteGroup: "আপনি কি এই গ্রুপটি ডিলিট করতে চান?",
      couldNotDeleteGroup: "গ্রুপ ডিলিট করা যায়নি",
      groupDeleted: "গ্রুপ সফলভাবে ডিলিট হয়েছে",
      userManagement: "ইউজার ম্যানেজমেন্ট",
      userGroups: "ইউজার গ্রুপ",
      userGroupsDescription: "ইউজারদের গ্রুপে পরিচালনা করুন",
      searchGroups: "গ্রুপ খুঁজুন",
      createGroup: "গ্রুপ তৈরি করুন",
      groupDirectory: "গ্রুপ ডিরেক্টরি",
      allGroups: "সব গ্রুপ",
      groups: "গ্রুপ",
      group: "গ্রুপ",
      noGroupsFound: "কোনো গ্রুপ পাওয়া যায়নি",
      noGroupsDescription: "এখনও কোনো গ্রুপ উপলব্ধ নেই",
      groupId: "গ্রুপ ID",
      created: "তৈরি হয়েছে",
      actions: "অ্যাকশন",
      userTargetingGroup: "ইউজার টার্গেটিং গ্রুপ",
      viewMembers: "মেম্বার দেখুন",
      delete: "ডিলিট",
      newGroup: "নতুন গ্রুপ",
      createUserGroup: "ইউজার গ্রুপ তৈরি করুন",
      groupName: "গ্রুপের নাম",
      groupNamePlaceholder: "গ্রুপের নাম লিখুন",
      cancel: "বাতিল",

      // Group Members
      groupNotFound: "গ্রুপ পাওয়া যায়নি",
      couldNotLoadGroupMembers: "গ্রুপ মেম্বার লোড করা যায়নি",
      userIdRequired: "ইউজার ID প্রয়োজন",
      couldNotAddUser: "ইউজার যোগ করা যায়নি",
      userAddedSuccessfully: "ইউজার সফলভাবে যোগ হয়েছে",
      confirmRemoveUser: "আপনি কি এই ইউজারকে সরাতে চান?",
      couldNotRemoveUser: "ইউজার সরানো যায়নি",
      userRemovedSuccessfully: "ইউজার সফলভাবে সরানো হয়েছে",
      backToGroups: "গ্রুপে ফিরে যান",
      groupMembership: "গ্রুপ মেম্বারশিপ",
      groupMembers: "গ্রুপ মেম্বার",
      groupMembersDescription: "এই গ্রুপের মেম্বার পরিচালনা করুন",
      totalMembers: "মোট মেম্বার",
      status: "স্ট্যাটাস",
      active: "সক্রিয়",
      membershipDirectory: "মেম্বারশিপ ডিরেক্টরি",
      members: "মেম্বার",
      member: "মেম্বার",
      enterUserId: "ইউজার ID লিখুন",
      addUser: "ইউজার যোগ করুন",
      noMembersYet: "এখনও কোনো মেম্বার নেই",
      adminNoMembersDescription: "এই গ্রুপে এখনও কোনো মেম্বার যোগ করা হয়নি",
      userNoMembersDescription: "এই গ্রুপে বর্তমানে কোনো মেম্বার নেই",
      user: "ইউজার",
      email: "ইমেইল",
      action: "অ্যাকশন",
      groupMember: "গ্রুপ মেম্বার",
      remove: "সরান",

      // Evaluation Tester
      flagEvaluation: "ফ্ল্যাগ ইভ্যালুয়েশন",
      evaluationTester: "ইভ্যালুয়েশন টেস্টার",
      evaluationTesterDescription: "ফিচার ফ্ল্যাগের ইভ্যালুয়েশন পরীক্ষা করুন",
      testConfiguration: "টেস্ট কনফিগারেশন",
      evaluateFeatureFlag: "ফিচার ফ্ল্যাগ ইভ্যালুয়েট করুন",
      selectFeatureFlag: "ফিচার ফ্ল্যাগ নির্বাচন করুন",
      selectEnvironment: "এনভায়রনমেন্ট নির্বাচন করুন",
      userIdExample: "যেমন 123",
      groupsExample: "যেমন developers",
      evaluating: "ইভ্যালুয়েট করা হচ্ছে...",
      evaluateFlag: "ফ্ল্যাগ ইভ্যালুয়েট করুন",
      evaluationResult: "ইভ্যালুয়েশন ফলাফল",
      decisionDetails: "সিদ্ধান্তের বিবরণ",
      rollout: "রোলআউট",
      bucket: "বাকেট",
      reason: "কারণ",
      finalResult: "চূড়ান্ত ফলাফল",
      enabled: "সক্রিয়",
      disabled: "নিষ্ক্রিয়",
      howItWasDecided: "কীভাবে সিদ্ধান্ত নেওয়া হয়েছে",
      userEvaluatedFor: "ইউজারের জন্য ইভ্যালুয়েশন",
      wasEvaluatedFor: "এর জন্য ইভ্যালুয়েট করা হয়েছে",
      evaluationReason: "ইভ্যালুয়েশনের কারণ",
      deterministicBucket: "ডিটারমিনিস্টিক বাকেট",
      andRollout: "এবং রোলআউট",
      noRolloutBucket: "রোলআউট না থাকায় কোনো বাকেট নেই",
      notAuthenticated: "অথেন্টিকেটেড নয়",
      sessionExpired: "সেশন শেষ হয়ে গেছে",
      couldNotLoadFlagsEnvironments: "ফ্ল্যাগ এবং এনভায়রনমেন্ট লোড করা যায়নি",
      selectFlagEnvironmentUser: "ফ্ল্যাগ, এনভায়রনমেন্ট এবং ইউজার নির্বাচন করুন",
      couldNotEvaluateFlag: "ফ্ল্যাগ ইভ্যালুয়েট করা যায়নি",

      // Environments
      configuration: "কনফিগারেশন",
      environmentsDescription: "আপনার ফিচার ফ্ল্যাগের জন্য এনভায়রনমেন্ট পরিচালনা করুন",
      couldNotLoadEnvironments: "এনভায়রনমেন্ট লোড করা যায়নি",
      environmentNameRequired: "এনভায়রনমেন্টের নাম প্রয়োজন",
      couldNotCreateEnvironment: "এনভায়রনমেন্ট তৈরি করা যায়নি",
      environmentCreated: "এনভায়রনমেন্ট সফলভাবে তৈরি হয়েছে",
      confirmDeleteEnvironment: "আপনি কি এই এনভায়রনমেন্টটি ডিলিট করতে চান?",
      couldNotDeleteEnvironment: "এনভায়রনমেন্ট ডিলিট করা যায়নি",
      environmentDeleted: "এনভায়রনমেন্ট সফলভাবে ডিলিট হয়েছে",
      totalEnvironments: "মোট এনভায়রনমেন্ট",
      available: "উপলব্ধ",
      createEnvironment: "এনভায়রনমেন্ট তৈরি করুন",
      addEnvironment: "এনভায়রনমেন্ট যোগ করুন",
      environmentName: "এনভায়রনমেন্টের নাম",
      environmentNamePlaceholder: "যেমন Production",
      description: "বিবরণ",
      environmentDescriptionPlaceholder: "এনভায়রনমেন্টের বিবরণ লিখুন",
      createEnvironmentButton: "এনভায়রনমেন্ট তৈরি করুন",
      environmentDirectory: "এনভায়রনমেন্ট ডিরেক্টরি",
      allEnvironments: "সব এনভায়রনমেন্ট",
      loadingEnvironments: "এনভায়রনমেন্ট লোড হচ্ছে...",
      noEnvironmentsFound: "কোনো এনভায়রনমেন্ট পাওয়া যায়নি",
      noDescriptionProvided: "কোনো বিবরণ দেওয়া হয়নি",

      // Overrides
      environmentOverrides: "এনভায়রনমেন্ট ওভাররাইড",
      environmentOverridesDescription: "বিভিন্ন এনভায়রনমেন্টের জন্য ফিচার ফ্ল্যাগের মান পরিচালনা করুন",
      couldNotLoadOverridesData: "ওভাররাইড ডেটা লোড করা যায়নি",
      selectFlagAndEnvironment: "ফ্ল্যাগ এবং এনভায়রনমেন্ট নির্বাচন করুন",
      couldNotCreateOverride: "ওভাররাইড তৈরি করা যায়নি",
      confirmDeleteOverride: "আপনি কি এই ওভাররাইডটি ডিলিট করতে চান?",
      couldNotDeleteOverride: "ওভাররাইড ডিলিট করা যায়নি",
      totalOverrides: "মোট ওভাররাইড",
      activeConfiguration: "সক্রিয় কনফিগারেশন",
      createOverride: "ওভাররাইড তৈরি করুন",
      addEnvironmentOverride: "এনভায়রনমেন্ট ওভাররাইড যোগ করুন",
      overrideValue: "ওভাররাইড মান",
      enabledTrue: "সক্রিয় (True)",
      disabledFalse: "নিষ্ক্রিয় (False)",
      createOverrideButton: "ওভাররাইড তৈরি করুন",
      existingOverrides: "বর্তমান ওভাররাইড",
      loading: "লোড হচ্ছে...",
      noEnvironmentOverrides: "কোনো এনভায়রনমেন্ট ওভাররাইড নেই",
      value: "মান",

      // Audit Logs
      systemActivity: "সিস্টেম অ্যাক্টিভিটি",
      auditLogsDescription: "সিস্টেমের সব পরিবর্তন এবং অ্যাক্টিভিটি দেখুন",
      totalLogs: "মোট লগ",
      logFilters: "লগ ফিল্টার",
      filterAuditLogs: "অডিট লগ ফিল্টার করুন",
      allActions: "সব অ্যাকশন",
      flagKey: "ফ্ল্যাগ কী",
      dateFrom: "তারিখ থেকে",
      dateTo: "তারিখ পর্যন্ত",
      applyFilters: "ফিল্টার প্রয়োগ করুন",
      clearFilters: "ফিল্টার পরিষ্কার করুন",
      activityHistory: "অ্যাক্টিভিটি হিস্ট্রি",
      auditLogRecords: "অডিট লগ রেকর্ড",
      logs: "লগ",
      log: "লগ",
      id: "ID",
      flag: "ফ্ল্যাগ",
      oldValue: "পুরনো মান",
      newValue: "নতুন মান",
      timestamp: "টাইমস্ট্যাম্প",
      details: "বিবরণ",
      loadingAuditLogs: "অডিট লগ লোড হচ্ছে...",
      noAuditLogsFound: "কোনো অডিট লগ পাওয়া যায়নি",
      noAuditLogsDescription: "এই ফিল্টারের জন্য কোনো অডিট লগ নেই",
      loading: "লোড হচ্ছে",
      viewDetails: "বিবরণ দেখুন",
      logDetails: "লগের বিবরণ",
      auditLogNumber: "অডিট লগ #",
      close: "বন্ধ করুন",
      flagId: "ফ্ল্যাগ ID",
      environmentId: "এনভায়রনমেন্ট ID",
      oldState: "পুরনো অবস্থা",
      newState: "নতুন অবস্থা",
      closeDetails: "বিবরণ বন্ধ করুন",
      failedToFetchAuditLogs: "অডিট লগ আনা যায়নি",
      failedToFetchAuditLogDetails: "অডিট লগের বিবরণ আনা যায়নি"
    },
  },

  // =====================================================
  // TAMIL
  // =====================================================
  ta: {
    translation: {
      language: "மொழி",

      home: "டாஷ்போர்டு",
      featureFlags: "அம்சக் கொடிகள்",
      environments: "சுற்றுச்சூழல்கள்",
      groups: "குழுக்கள்",
      targetingRules: "இலக்கு விதிகள்",
      overrides: "மேலெழுதல்கள்",
      evaluationTester: "மதிப்பீட்டு சோதனையாளர்",
      auditLogs: "தணிக்கை பதிவுகள்",
      logout: "வெளியேறு",

      releaseControl: "வெளியீட்டு கட்டுப்பாடு",
      featureFlagsDescription:
        "அம்சக் கொடிகள், செயல்படுத்தல் மற்றும் சதவீத அடிப்படையிலான ரோல்அவுட்களை நிர்வகிக்கவும்.",

      totalFlags: "மொத்த அம்சக் கொடிகள்",
      enabledFlags: "செயல்படுத்தப்பட்ட கொடிகள்",
      rolloutEnabled: "செயல்படுத்தப்பட்ட ரோல்அவுட்",

      flagDirectory: "கொடி பட்டியல்",
      allFeatureFlags: "அனைத்து அம்சக் கொடிகள்",
      createFeatureFlag: "அம்சக் கொடியை உருவாக்கவும்",

      noFeatureFlags:
        "அம்சக் கொடிகள் எதுவும் கிடைக்கவில்லை",
      featureFlagEmptyText:
        "ரோல்அவுட் நிர்வகிக்க ஒரு அம்சக் கொடியை உருவாக்கவும்.",

      flag: "கொடி",
      status: "நிலை",
      rollout: "ரோல்அவுட்",
      owner: "உரிமையாளர்",
      action: "செயல்",

      enabled: "செயல்படுத்தப்பட்டது",
      disabled: "முடக்கப்பட்டது",
      viewOnly: "பார்வைக்கு மட்டும்",
      delete: "நீக்கு",

      newFlag: "புதிய கொடி",
      flagKey: "கொடி விசை",
      type: "வகை",
      description: "விளக்கம்",
      ownerTeam: "உரிமையாளர் குழு",
      rolloutPercentage: "ரோல்அவுட் சதவீதம்",
      enableFeatureFlag:
        "இந்த அம்சக் கொடியை செயல்படுத்தவும்",

      cancel: "ரத்து செய்",
      createFlag: "கொடியை உருவாக்கவும்",

      couldNotLoadFeatureFlags:
        "அம்சக் கொடிகளை ஏற்ற முடியவில்லை.",
      featureFlagKeyRequired:
        "அம்சக் கொடி விசை தேவை.",
      couldNotCreateFeatureFlag:
        "அம்சக் கொடியை உருவாக்க முடியவில்லை.",
      featureFlagCreated:
        "அம்சக் கொடி வெற்றிகரமாக உருவாக்கப்பட்டது.",
      couldNotUpdateRollout:
        "ரோல்அவுட் சதவீதத்தை புதுப்பிக்க முடியவில்லை.",
      rolloutUpdated:
        "{{key}} ரோல்அவுட் {{percentage}}% ஆக புதுப்பிக்கப்பட்டது.",
      confirmDeleteFeatureFlag:
        "இந்த அம்சக் கொடியை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
      couldNotDeleteFeatureFlag:
        "அம்சக் கொடியை நீக்க முடியவில்லை.",
      featureFlagDeleted:
        "அம்சக் கொடி வெற்றிகரமாக நீக்கப்பட்டது.",

      flagDescriptionPlaceholder:
        "இந்தக் கொடி எதைக் கட்டுப்படுத்துகிறது?",
    },
  },

  // =====================================================
  // TELUGU
  // =====================================================
  te: {
    translation: {
      language: "భాష",

      home: "డాష్‌బోర్డ్",
      featureFlags: "ఫీచర్ ఫ్లాగ్స్",
      environments: "ఎన్విరాన్‌మెంట్స్",
      groups: "గ్రూప్స్",
      targetingRules: "టార్గెటింగ్ నియమాలు",
      overrides: "ఓవర్‌రైడ్స్",
      evaluationTester: "ఎవాల్యుయేషన్ టెస్టర్",
      auditLogs: "ఆడిట్ లాగ్స్",
      logout: "లాగ్‌అవుట్",

      releaseControl: "రిలీజ్ కంట్రోల్",
      featureFlagsDescription:
        "ఫీచర్ ఫ్లాగ్స్, యాక్టివేషన్ మరియు శాతం ఆధారిత రోల్‌అవుట్‌లను నిర్వహించండి.",

      totalFlags: "మొత్తం ఫ్లాగ్స్",
      enabledFlags: "యాక్టివ్ ఫ్లాగ్స్",
      rolloutEnabled: "యాక్టివ్ రోల్‌అవుట్",

      flagDirectory: "ఫ్లాగ్ జాబితా",
      allFeatureFlags: "అన్ని ఫీచర్ ఫ్లాగ్స్",
      createFeatureFlag: "ఫీచర్ ఫ్లాగ్ సృష్టించండి",

      noFeatureFlags:
        "ఫీచర్ ఫ్లాగ్స్ ఏవీ కనుగొనబడలేదు",
      featureFlagEmptyText:
        "రోల్‌అవుట్ నిర్వహించడానికి ఫీచర్ ఫ్లాగ్‌ను సృష్టించండి.",

      flag: "ఫ్లాగ్",
      status: "స్థితి",
      rollout: "రోల్‌అవుట్",
      owner: "యజమాని",
      action: "చర్య",

      enabled: "యాక్టివ్",
      disabled: "డిసేబుల్",
      viewOnly: "చూడటానికి మాత్రమే",
      delete: "తొలగించు",

      newFlag: "కొత్త ఫ్లాగ్",
      flagKey: "ఫ్లాగ్ కీ",
      type: "రకం",
      description: "వివరణ",
      ownerTeam: "యజమాని టీమ్",
      rolloutPercentage: "రోల్‌అవుట్ శాతం",
      enableFeatureFlag:
        "ఈ ఫీచర్ ఫ్లాగ్‌ను యాక్టివ్ చేయండి",

      cancel: "రద్దు చేయి",
      createFlag: "ఫ్లాగ్ సృష్టించండి",

      couldNotLoadFeatureFlags:
        "ఫీచర్ ఫ్లాగ్స్ లోడ్ చేయలేకపోయాము.",
      featureFlagKeyRequired:
        "ఫీచర్ ఫ్లాగ్ కీ అవసరం.",
      couldNotCreateFeatureFlag:
        "ఫీచర్ ఫ్లాగ్ సృష్టించలేకపోయాము.",
      featureFlagCreated:
        "ఫీచర్ ఫ్లాగ్ విజయవంతంగా సృష్టించబడింది.",
      couldNotUpdateRollout:
        "రోల్‌అవుట్ శాతాన్ని అప్‌డేట్ చేయలేకపోయాము.",
      rolloutUpdated:
        "{{key}} రోల్‌అవుట్ {{percentage}}%కి అప్‌డేట్ చేయబడింది.",
      confirmDeleteFeatureFlag:
        "మీరు నిజంగా ఈ ఫీచర్ ఫ్లాగ్‌ను తొలగించాలనుకుంటున్నారా?",
      couldNotDeleteFeatureFlag:
        "ఫీచర్ ఫ్లాగ్‌ను తొలగించలేకపోయాము.",
      featureFlagDeleted:
        "ఫీచర్ ఫ్లాగ్ విజయవంతంగా తొలగించబడింది.",

      flagDescriptionPlaceholder:
        "ఈ ఫ్లాగ్ దేనిని నియంత్రిస్తుంది?",

      // Home / Dashboard
      releaseControlHub: "రిలీజ్ కంట్రోల్ హబ్",
      featureManagementConsole: "ఫీచర్ మేనేజ్‌మెంట్ కన్సోల్",
      dashboardDescription: "మీ ఫీచర్ ఫ్లాగ్‌లు మరియు సిస్టమ్ యాక్టివిటీని నిర్వహించండి",
      signedInAs: "ఈ పేరుతో సైన్ ఇన్ చేశారు",
      totalFeatureFlags: "మొత్తం ఫీచర్ ఫ్లాగ్‌లు",
      activeFlags: "యాక్టివ్ ఫ్లాగ్‌లు",
      environmentsCount: "ఎన్విరాన్‌మెంట్‌లు",
      overridesCount: "ఓవర్‌రైడ్‌లు",
      todaysEvaluations: "ఈరోజు ఎవాల్యుయేషన్‌లు",
      auditLogsToday: "ఈరోజు ఆడిట్ లాగ్‌లు",

      evaluationAnalytics: "ఎవాల్యుయేషన్ అనలిటిక్స్",
      featureFlagEvaluations: "ఫీచర్ ఫ్లాగ్ ఎవాల్యుయేషన్‌లు",
      evaluationActivity: "ఎవాల్యుయేషన్ యాక్టివిటీ",
      totalEvaluations: "మొత్తం ఎవాల్యుయేషన్‌లు",
      loadingAnalytics: "అనలిటిక్స్ లోడ్ అవుతోంది...",
      noEvaluationData: "ఎవాల్యుయేషన్ డేటా అందుబాటులో లేదు",
      evaluations: "ఎవాల్యుయేషన్‌లు",
      time: "సమయం",

      flagAnalytics: "ఫ్లాగ్ అనలిటిక్స్",
      evaluationsByFeatureFlag: "ఫీచర్ ఫ్లాగ్ ఆధారంగా ఎవాల్యుయేషన్‌లు",
      flagEvaluationDescription: "ప్రతి ఫీచర్ ఫ్లాగ్ ఎవాల్యుయేషన్ యొక్క అవలోకనం",
      loadingFlagAnalytics: "ఫ్లాగ్ అనలిటిక్స్ లోడ్ అవుతోంది...",
      noFlagAnalytics: "ఫ్లాగ్ అనలిటిక్స్ అందుబాటులో లేదు",
      evaluation: "ఎవాల్యుయేషన్",
      evaluationsPlural: "ఎవాల్యుయేషన్‌లు",

      environmentAnalytics: "ఎన్విరాన్‌మెంట్ అనలిటిక్స్",
      environmentUsage: "ఎన్విరాన్‌మెంట్ వినియోగం",
      environmentUsageDescription: "వివిధ ఎన్విరాన్‌మెంట్‌లలో ఫీచర్ ఫ్లాగ్ వినియోగం",
      loadingEnvironmentUsage: "ఎన్విరాన్‌మెంట్ వినియోగం లోడ్ అవుతోంది...",
      noEnvironmentUsage: "ఎన్విరాన్‌మెంట్ వినియోగ డేటా అందుబాటులో లేదు",

      auditActivity: "ఆడిట్ యాక్టివిటీ",
      recentAuditLogs: "ఇటీవలి ఆడిట్ లాగ్‌లు",
      latestChanges: "తాజా మార్పులు",
      viewAll: "అన్నీ చూడండి",
      loadingAuditLogs: "ఆడిట్ లాగ్‌లు లోడ్ అవుతున్నాయి...",
      noAuditActivity: "ఆడిట్ యాక్టివిటీ అందుబాటులో లేదు",
      actor: "వినియోగదారు",

      welcome: "స్వాగతం",
      welcomeTitle: "ఫీచర్ మేనేజ్‌మెంట్ కన్సోల్‌కు స్వాగతం",
      welcomeDescription: "ఫీచర్ ఫ్లాగ్‌లు, ఎన్విరాన్‌మెంట్‌లు మరియు సిస్టమ్ యాక్టివిటీని నిర్వహించండి",
      manageFeatureFlags: "ఫీచర్ ఫ్లాగ్‌లను నిర్వహించండి",

      // Groups
      couldNotLoadGroups: "గ్రూప్‌లను లోడ్ చేయలేకపోయాము",
      groupNameRequired: "గ్రూప్ పేరు అవసరం",
      couldNotCreateGroup: "గ్రూప్‌ను సృష్టించలేకపోయాము",
      groupCreated: "గ్రూప్ విజయవంతంగా సృష్టించబడింది",
      confirmDeleteGroup: "మీరు ఈ గ్రూప్‌ను తొలగించాలనుకుంటున్నారా?",
      couldNotDeleteGroup: "గ్రూప్‌ను తొలగించలేకపోయాము",
      groupDeleted: "గ్రూప్ విజయవంతంగా తొలగించబడింది",
      userManagement: "యూజర్ మేనేజ్‌మెంట్",
      userGroups: "యూజర్ గ్రూప్‌లు",
      userGroupsDescription: "యూజర్‌లను గ్రూప్‌లలో నిర్వహించండి",
      searchGroups: "గ్రూప్‌లను వెతకండి",
      createGroup: "గ్రూప్‌ను సృష్టించండి",
      groupDirectory: "గ్రూప్ డైరెక్టరీ",
      allGroups: "అన్ని గ్రూప్‌లు",
      groups: "గ్రూప్‌లు",
      group: "గ్రూప్",
      noGroupsFound: "గ్రూప్‌లు ఏవీ కనుగొనబడలేదు",
      noGroupsDescription: "ఇంకా గ్రూప్‌లు అందుబాటులో లేవు",
      groupId: "గ్రూప్ ID",
      created: "సృష్టించబడింది",
      actions: "చర్యలు",
      userTargetingGroup: "యూజర్ టార్గెటింగ్ గ్రూప్",
      viewMembers: "మెంబర్‌లను చూడండి",
      delete: "తొలగించు",
      newGroup: "కొత్త గ్రూప్",
      createUserGroup: "యూజర్ గ్రూప్‌ను సృష్టించండి",
      groupName: "గ్రూప్ పేరు",
      groupNamePlaceholder: "గ్రూప్ పేరు నమోదు చేయండి",
      cancel: "రద్దు చేయండి",

      // Group Members
      groupNotFound: "గ్రూప్ కనుగొనబడలేదు",
      couldNotLoadGroupMembers: "గ్రూప్ మెంబర్‌లను లోడ్ చేయలేకపోయాము",
      userIdRequired: "యూజర్ ID అవసరం",
      couldNotAddUser: "యూజర్‌ను జోడించలేకపోయాము",
      userAddedSuccessfully: "యూజర్ విజయవంతంగా జోడించబడ్డారు",
      confirmRemoveUser: "మీరు ఈ యూజర్‌ను తొలగించాలనుకుంటున్నారా?",
      couldNotRemoveUser: "యూజర్‌ను తొలగించలేకపోయాము",
      userRemovedSuccessfully: "యూజర్ విజయవంతంగా తొలగించబడ్డారు",
      backToGroups: "గ్రూప్‌లకు తిరిగి వెళ్లండి",
      groupMembership: "గ్రూప్ మెంబర్‌షిప్",
      groupMembers: "గ్రూప్ మెంబర్‌లు",
      groupMembersDescription: "ఈ గ్రూప్‌లోని మెంబర్‌లను నిర్వహించండి",
      totalMembers: "మొత్తం మెంబర్‌లు",
      status: "స్థితి",
      active: "యాక్టివ్",
      membershipDirectory: "మెంబర్‌షిప్ డైరెక్టరీ",
      members: "మెంబర్‌లు",
      member: "మెంబర్",
      enterUserId: "యూజర్ ID నమోదు చేయండి",
      addUser: "యూజర్‌ను జోడించండి",
      noMembersYet: "ఇంకా మెంబర్‌లు లేరు",
      adminNoMembersDescription: "ఈ గ్రూప్‌లో ఇంకా మెంబర్‌లు జోడించబడలేదు",
      userNoMembersDescription: "ఈ గ్రూప్‌లో ప్రస్తుతం మెంబర్‌లు లేరు",
      user: "యూజర్",
      email: "ఈమెయిల్",
      action: "చర్య",
      groupMember: "గ్రూప్ మెంబర్",
      remove: "తొలగించు",

      // Evaluation Tester
      flagEvaluation: "ఫ్లాగ్ ఎవాల్యుయేషన్",
      evaluationTester: "ఎవాల్యుయేషన్ టెస్టర్",
      evaluationTesterDescription: "ఫీచర్ ఫ్లాగ్ ఎవాల్యుయేషన్‌ను పరీక్షించండి",
      testConfiguration: "టెస్ట్ కాన్ఫిగరేషన్",
      evaluateFeatureFlag: "ఫీచర్ ఫ్లాగ్‌ను ఎవాల్యుయేట్ చేయండి",
      selectFeatureFlag: "ఫీచర్ ఫ్లాగ్‌ను ఎంచుకోండి",
      selectEnvironment: "ఎన్విరాన్‌మెంట్‌ను ఎంచుకోండి",
      userIdExample: "ఉదా. 123",
      groupsExample: "ఉదా. developers",
      evaluating: "ఎవాల్యుయేట్ అవుతోంది...",
      evaluateFlag: "ఫ్లాగ్‌ను ఎవాల్యుయేట్ చేయండి",
      evaluationResult: "ఎవాల్యుయేషన్ ఫలితం",
      decisionDetails: "నిర్ణయ వివరాలు",
      rollout: "రోల్‌అవుట్",
      bucket: "బకెట్",
      reason: "కారణం",
      finalResult: "చివరి ఫలితం",
      enabled: "యాక్టివ్",
      disabled: "డిసేబుల్",
      howItWasDecided: "నిర్ణయం ఎలా తీసుకోబడింది",
      userEvaluatedFor: "యూజర్ కోసం ఎవాల్యుయేషన్",
      wasEvaluatedFor: "దీని కోసం ఎవాల్యుయేట్ చేయబడింది",
      evaluationReason: "ఎవాల్యుయేషన్ కారణం",
      deterministicBucket: "డిటర్మినిస్టిక్ బకెట్",
      andRollout: "మరియు రోల్‌అవుట్",
      noRolloutBucket: "రోల్‌అవుట్ లేకపోవడం వల్ల బకెట్ లేదు",
      notAuthenticated: "ఆథెంటికేట్ కాలేదు",
      sessionExpired: "సెషన్ ముగిసింది",
      couldNotLoadFlagsEnvironments: "ఫ్లాగ్‌లు మరియు ఎన్విరాన్‌మెంట్‌లను లోడ్ చేయలేకపోయాము",
      selectFlagEnvironmentUser: "ఫ్లాగ్, ఎన్విరాన్‌మెంట్ మరియు యూజర్‌ను ఎంచుకోండి",
      couldNotEvaluateFlag: "ఫ్లాగ్‌ను ఎవాల్యుయేట్ చేయలేకపోయాము",

      // Environments
      configuration: "కాన్ఫిగరేషన్",
      environmentsDescription: "మీ ఫీచర్ ఫ్లాగ్‌ల కోసం ఎన్విరాన్‌మెంట్‌లను నిర్వహించండి",
      couldNotLoadEnvironments: "ఎన్విరాన్‌మెంట్‌లను లోడ్ చేయలేకపోయాము",
      environmentNameRequired: "ఎన్విరాన్‌మెంట్ పేరు అవసరం",
      couldNotCreateEnvironment: "ఎన్విరాన్‌మెంట్‌ను సృష్టించలేకపోయాము",
      environmentCreated: "ఎన్విరాన్‌మెంట్ విజయవంతంగా సృష్టించబడింది",
      confirmDeleteEnvironment: "మీరు ఈ ఎన్విరాన్‌మెంట్‌ను తొలగించాలనుకుంటున్నారా?",
      couldNotDeleteEnvironment: "ఎన్విరాన్‌మెంట్‌ను తొలగించలేకపోయాము",
      environmentDeleted: "ఎన్విరాన్‌మెంట్ విజయవంతంగా తొలగించబడింది",
      totalEnvironments: "మొత్తం ఎన్విరాన్‌మెంట్‌లు",
      available: "అందుబాటులో ఉంది",
      createEnvironment: "ఎన్విరాన్‌మెంట్‌ను సృష్టించండి",
      addEnvironment: "ఎన్విరాన్‌మెంట్‌ను జోడించండి",
      environmentName: "ఎన్విరాన్‌మెంట్ పేరు",
      environmentNamePlaceholder: "ఉదా. Production",
      description: "వివరణ",
      environmentDescriptionPlaceholder: "ఎన్విరాన్‌మెంట్ వివరణను నమోదు చేయండి",
      createEnvironmentButton: "ఎన్విరాన్‌మెంట్‌ను సృష్టించండి",
      environmentDirectory: "ఎన్విరాన్‌మెంట్ డైరెక్టరీ",
      allEnvironments: "అన్ని ఎన్విరాన్‌మెంట్‌లు",
      loadingEnvironments: "ఎన్విరాన్‌మెంట్‌లు లోడ్ అవుతున్నాయి...",
      noEnvironmentsFound: "ఎన్విరాన్‌మెంట్‌లు ఏవీ కనుగొనబడలేదు",
      noDescriptionProvided: "వివరణ ఇవ్వబడలేదు",

      // Overrides
      environmentOverrides: "ఎన్విరాన్‌మెంట్ ఓవర్‌రైడ్‌లు",
      environmentOverridesDescription: "వివిధ ఎన్విరాన్‌మెంట్‌ల కోసం ఫీచర్ ఫ్లాగ్ విలువలను నిర్వహించండి",
      couldNotLoadOverridesData: "ఓవర్‌రైడ్ డేటాను లోడ్ చేయలేకపోయాము",
      selectFlagAndEnvironment: "ఫ్లాగ్ మరియు ఎన్విరాన్‌మెంట్‌ను ఎంచుకోండి",
      couldNotCreateOverride: "ఓవర్‌రైడ్‌ను సృష్టించలేకపోయాము",
      confirmDeleteOverride: "మీరు ఈ ఓవర్‌రైడ్‌ను తొలగించాలనుకుంటున్నారా?",
      couldNotDeleteOverride: "ఓవర్‌రైడ్‌ను తొలగించలేకపోయాము",
      totalOverrides: "మొత్తం ఓవర్‌రైడ్‌లు",
      activeConfiguration: "యాక్టివ్ కాన్ఫిగరేషన్",
      createOverride: "ఓవర్‌రైడ్‌ను సృష్టించండి",
      addEnvironmentOverride: "ఎన్విరాన్‌మెంట్ ఓవర్‌రైడ్‌ను జోడించండి",
      overrideValue: "ఓవర్‌రైడ్ విలువ",
      enabledTrue: "యాక్టివ్ (True)",
      disabledFalse: "డిసేబుల్ (False)",
      createOverrideButton: "ఓవర్‌రైడ్‌ను సృష్టించండి",
      existingOverrides: "ప్రస్తుత ఓవర్‌రైడ్‌లు",
      loading: "లోడ్ అవుతోంది...",
      noEnvironmentOverrides: "ఎన్విరాన్‌మెంట్ ఓవర్‌రైడ్‌లు లేవు",
      value: "విలువ",

      // Audit Logs
      systemActivity: "సిస్టమ్ యాక్టివిటీ",
      auditLogsDescription: "సిస్టమ్‌లో జరిగిన అన్ని మార్పులు మరియు యాక్టివిటీని చూడండి",
      totalLogs: "మొత్తం లాగ్‌లు",
      logFilters: "లాగ్ ఫిల్టర్‌లు",
      filterAuditLogs: "ఆడిట్ లాగ్‌లను ఫిల్టర్ చేయండి",
      allActions: "అన్ని చర్యలు",
      flagKey: "ఫ్లాగ్ కీ",
      dateFrom: "తేదీ నుండి",
      dateTo: "తేదీ వరకు",
      applyFilters: "ఫిల్టర్‌లను వర్తింపజేయండి",
      clearFilters: "ఫిల్టర్‌లను క్లియర్ చేయండి",
      activityHistory: "యాక్టివిటీ హిస్టరీ",
      auditLogRecords: "ఆడిట్ లాగ్ రికార్డ్‌లు",
      logs: "లాగ్‌లు",
      log: "లాగ్",
      id: "ID",
      flag: "ఫ్లాగ్",
      oldValue: "పాత విలువ",
      newValue: "కొత్త విలువ",
      timestamp: "టైమ్‌స్టాంప్",
      details: "వివరాలు",
      loadingAuditLogs: "ఆడిట్ లాగ్‌లు లోడ్ అవుతున్నాయి...",
      noAuditLogsFound: "ఆడిట్ లాగ్‌లు ఏవీ కనుగొనబడలేదు",
      noAuditLogsDescription: "ఈ ఫిల్టర్ కోసం ఆడిట్ లాగ్‌లు ఏవీ లేవు",
      loading: "లోడ్ అవుతోంది",
      viewDetails: "వివరాలను చూడండి",
      logDetails: "లాగ్ వివరాలు",
      auditLogNumber: "ఆడిట్ లాగ్ #",
      close: "మూసివేయి",
      flagId: "ఫ్లాగ్ ID",
      environmentId: "ఎన్విరాన్‌మెంట్ ID",
      oldState: "పాత స్థితి",
      newState: "కొత్త స్థితి",
      closeDetails: "వివరాలను మూసివేయండి",
      failedToFetchAuditLogs: "ఆడిట్ లాగ్‌లను పొందలేకపోయాము",
      failedToFetchAuditLogDetails: "ఆడిట్ లాగ్ వివరాలను పొందలేకపోయాము"
    },
  },

  // =====================================================
  // KANNADA
  // =====================================================
  kn: {
    translation: {
      language: "ಭಾಷೆ",

      home: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      featureFlags: "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳು",
      environments: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳು",
      groups: "ಗುಂಪುಗಳು",
      targetingRules: "ಟಾರ್ಗೆಟಿಂಗ್ ನಿಯಮಗಳು",
      overrides: "ಓವರ್‌ರೈಡ್‌ಗಳು",
      evaluationTester: "ಮೌಲ್ಯಮಾಪನ ಪರೀಕ್ಷಕ",
      auditLogs: "ಆಡಿಟ್ ಲಾಗ್‌ಗಳು",
      logout: "ಲಾಗ್‌ಔಟ್",

      releaseControl: "ರಿಲೀಸ್ ಕಂಟ್ರೋಲ್",
      featureFlagsDescription:
        "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳು, ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ ಮತ್ತು ಶೇಕಡಾವಾರು ಆಧಾರಿತ ರೋಲ್‌ಔಟ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",

      totalFlags: "ಒಟ್ಟು ಫ್ಲ್ಯಾಗ್‌ಗಳು",
      enabledFlags: "ಸಕ್ರಿಯ ಫ್ಲ್ಯಾಗ್‌ಗಳು",
      rolloutEnabled: "ಸಕ್ರಿಯ ರೋಲ್‌ಔಟ್",

      flagDirectory: "ಫ್ಲ್ಯಾಗ್ ಪಟ್ಟಿ",
      allFeatureFlags: "ಎಲ್ಲಾ ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳು",
      createFeatureFlag: "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ರಚಿಸಿ",

      noFeatureFlags:
        "ಯಾವುದೇ ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
      featureFlagEmptyText:
        "ರೋಲ್‌ಔಟ್ ನಿರ್ವಹಿಸಲು ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ರಚಿಸಿ.",

      flag: "ಫ್ಲ್ಯಾಗ್",
      status: "ಸ್ಥಿತಿ",
      rollout: "ರೋಲ್‌ಔಟ್",
      owner: "ಮಾಲೀಕ",
      action: "ಕ್ರಿಯೆ",

      enabled: "ಸಕ್ರಿಯ",
      disabled: "ನಿಷ್ಕ್ರಿಯ",
      viewOnly: "ವೀಕ್ಷಿಸಲು ಮಾತ್ರ",
      delete: "ಅಳಿಸಿ",

      newFlag: "ಹೊಸ ಫ್ಲ್ಯಾಗ್",
      flagKey: "ಫ್ಲ್ಯಾಗ್ ಕೀ",
      type: "ಪ್ರಕಾರ",
      description: "ವಿವರಣೆ",
      ownerTeam: "ಮಾಲೀಕ ತಂಡ",
      rolloutPercentage: "ರೋಲ್‌ಔಟ್ ಶೇಕಡಾವಾರು",
      enableFeatureFlag:
        "ಈ ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",

      cancel: "ರದ್ದುಮಾಡಿ",
      createFlag: "ಫ್ಲ್ಯಾಗ್ ರಚಿಸಿ",

      couldNotLoadFeatureFlags:
        "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
      featureFlagKeyRequired:
        "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಕೀ ಅಗತ್ಯವಿದೆ.",
      couldNotCreateFeatureFlag:
        "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
      featureFlagCreated:
        "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ.",
      couldNotUpdateRollout:
        "ರೋಲ್‌ಔಟ್ ಶೇಕಡಾವಾರು ನವೀಕರಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
      rolloutUpdated:
        "{{key}} ರೋಲ್‌ಔಟ್ {{percentage}}% ಗೆ ನವೀಕರಿಸಲಾಗಿದೆ.",
      confirmDeleteFeatureFlag:
        "ಈ ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಅನ್ನು ಅಳಿಸಲು ನೀವು ಖಚಿತವಾಗಿದ್ದೀರಾ?",
      couldNotDeleteFeatureFlag:
        "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಅಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
      featureFlagDeleted:
        "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ.",

      flagDescriptionPlaceholder:
        "ಈ ಫ್ಲ್ಯಾಗ್ ಯಾವುದನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ?",

      // Home / Dashboard
      releaseControlHub: "ರಿಲೀಸ್ ಕಂಟ್ರೋಲ್ ಹಬ್",
      featureManagementConsole: "ಫೀಚರ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಕನ್ಸೋಲ್",
      dashboardDescription: "ನಿಮ್ಮ ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳು ಮತ್ತು ಸಿಸ್ಟಮ್ ಚಟುವಟಿಕೆಯನ್ನು ನಿರ್ವಹಿಸಿ",
      signedInAs: "ಈ ಹೆಸರಿನಲ್ಲಿ ಸೈನ್ ಇನ್ ಆಗಿದ್ದೀರಿ",
      totalFeatureFlags: "ಒಟ್ಟು ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳು",
      activeFlags: "ಸಕ್ರಿಯ ಫ್ಲ್ಯಾಗ್‌ಗಳು",
      environmentsCount: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳು",
      overridesCount: "ಓವರ್‌ರೈಡ್‌ಗಳು",
      todaysEvaluations: "ಇಂದಿನ ಇವಾಲ್ಯುಯೇಷನ್‌ಗಳು",
      auditLogsToday: "ಇಂದಿನ ಆಡಿಟ್ ಲಾಗ್‌ಗಳು",

      evaluationAnalytics: "ಇವಾಲ್ಯುಯೇಷನ್ ಅನಾಲಿಟಿಕ್ಸ್",
      featureFlagEvaluations: "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಇವಾಲ್ಯುಯೇಷನ್‌ಗಳು",
      evaluationActivity: "ಇವಾಲ್ಯುಯೇಷನ್ ಚಟುವಟಿಕೆ",
      totalEvaluations: "ಒಟ್ಟು ಇವಾಲ್ಯುಯೇಷನ್‌ಗಳು",
      loadingAnalytics: "ಅನಾಲಿಟಿಕ್ಸ್ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      noEvaluationData: "ಯಾವುದೇ ಇವಾಲ್ಯುಯೇಷನ್ ಡೇಟಾ ಲಭ್ಯವಿಲ್ಲ",
      evaluations: "ಇವಾಲ್ಯುಯೇಷನ್‌ಗಳು",
      time: "ಸಮಯ",

      flagAnalytics: "ಫ್ಲ್ಯಾಗ್ ಅನಾಲಿಟಿಕ್ಸ್",
      evaluationsByFeatureFlag: "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಪ್ರಕಾರ ಇವಾಲ್ಯುಯೇಷನ್‌ಗಳು",
      flagEvaluationDescription: "ಪ್ರತಿ ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ನ ಇವಾಲ್ಯುಯೇಷನ್‌ನ ಅವಲೋಕನ",
      loadingFlagAnalytics: "ಫ್ಲ್ಯಾಗ್ ಅನಾಲಿಟಿಕ್ಸ್ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      noFlagAnalytics: "ಯಾವುದೇ ಫ್ಲ್ಯಾಗ್ ಅನಾಲಿಟಿಕ್ಸ್ ಲಭ್ಯವಿಲ್ಲ",
      evaluation: "ಇವಾಲ್ಯುಯೇಷನ್",
      evaluationsPlural: "ಇವಾಲ್ಯುಯೇಷನ್‌ಗಳು",

      environmentAnalytics: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಅನಾಲಿಟಿಕ್ಸ್",
      environmentUsage: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಬಳಕೆ",
      environmentUsageDescription: "ವಿವಿಧ ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳಲ್ಲಿ ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಬಳಕೆ",
      loadingEnvironmentUsage: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಬಳಕೆ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      noEnvironmentUsage: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಬಳಕೆಯ ಡೇಟಾ ಲಭ್ಯವಿಲ್ಲ",

      auditActivity: "ಆಡಿಟ್ ಚಟುವಟಿಕೆ",
      recentAuditLogs: "ಇತ್ತೀಚಿನ ಆಡಿಟ್ ಲಾಗ್‌ಗಳು",
      latestChanges: "ಇತ್ತೀಚಿನ ಬದಲಾವಣೆಗಳು",
      viewAll: "ಎಲ್ಲವನ್ನೂ ನೋಡಿ",
      loadingAuditLogs: "ಆಡಿಟ್ ಲಾಗ್‌ಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...",
      noAuditActivity: "ಯಾವುದೇ ಆಡಿಟ್ ಚಟುವಟಿಕೆ ಇಲ್ಲ",
      actor: "ಬಳಕೆದಾರ",

      welcome: "ಸ್ವಾಗತ",
      welcomeTitle: "ಫೀಚರ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್ ಕನ್ಸೋಲ್‌ಗೆ ಸ್ವಾಗತ",
      welcomeDescription: "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳು, ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳು ಮತ್ತು ಸಿಸ್ಟಮ್ ಚಟುವಟಿಕೆಯನ್ನು ನಿರ್ವಹಿಸಿ",
      manageFeatureFlags: "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ",

      // Groups
      couldNotLoadGroups: "ಗ್ರೂಪ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      groupNameRequired: "ಗ್ರೂಪ್ ಹೆಸರು ಅಗತ್ಯವಿದೆ",
      couldNotCreateGroup: "ಗ್ರೂಪ್ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      groupCreated: "ಗ್ರೂಪ್ ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ",
      confirmDeleteGroup: "ಈ ಗ್ರೂಪ್ ಅನ್ನು ಅಳಿಸಲು ಬಯಸುವಿರಾ?",
      couldNotDeleteGroup: "ಗ್ರೂಪ್ ಅಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      groupDeleted: "ಗ್ರೂಪ್ ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ",
      userManagement: "ಯೂಸರ್ ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್",
      userGroups: "ಯೂಸರ್ ಗ್ರೂಪ್‌ಗಳು",
      userGroupsDescription: "ಯೂಸರ್‌ಗಳನ್ನು ಗ್ರೂಪ್‌ಗಳಲ್ಲಿ ನಿರ್ವಹಿಸಿ",
      searchGroups: "ಗ್ರೂಪ್‌ಗಳನ್ನು ಹುಡುಕಿ",
      createGroup: "ಗ್ರೂಪ್ ರಚಿಸಿ",
      groupDirectory: "ಗ್ರೂಪ್ ಡೈರೆಕ್ಟರಿ",
      allGroups: "ಎಲ್ಲಾ ಗ್ರೂಪ್‌ಗಳು",
      groups: "ಗ್ರೂಪ್‌ಗಳು",
      group: "ಗ್ರೂಪ್",
      noGroupsFound: "ಯಾವುದೇ ಗ್ರೂಪ್‌ಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
      noGroupsDescription: "ಇನ್ನೂ ಯಾವುದೇ ಗ್ರೂಪ್‌ಗಳು ಲಭ್ಯವಿಲ್ಲ",
      groupId: "ಗ್ರೂಪ್ ID",
      created: "ರಚಿಸಲಾಗಿದೆ",
      actions: "ಕ್ರಿಯೆಗಳು",
      userTargetingGroup: "ಯೂಸರ್ ಟಾರ್ಗೆಟಿಂಗ್ ಗ್ರೂಪ್",
      viewMembers: "ಮೆಂಬರ್‌ಗಳನ್ನು ನೋಡಿ",
      delete: "ಅಳಿಸಿ",
      newGroup: "ಹೊಸ ಗ್ರೂಪ್",
      createUserGroup: "ಯೂಸರ್ ಗ್ರೂಪ್ ರಚಿಸಿ",
      groupName: "ಗ್ರೂಪ್ ಹೆಸರು",
      groupNamePlaceholder: "ಗ್ರೂಪ್ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
      cancel: "ರದ್ದುಮಾಡಿ",

      // Group Members
      groupNotFound: "ಗ್ರೂಪ್ ಕಂಡುಬಂದಿಲ್ಲ",
      couldNotLoadGroupMembers: "ಗ್ರೂಪ್ ಮೆಂಬರ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      userIdRequired: "ಯೂಸರ್ ID ಅಗತ್ಯವಿದೆ",
      couldNotAddUser: "ಯೂಸರ್ ಸೇರಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      userAddedSuccessfully: "ಯೂಸರ್ ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ",
      confirmRemoveUser: "ಈ ಯೂಸರ್ ಅನ್ನು ತೆಗೆದುಹಾಕಲು ಬಯಸುವಿರಾ?",
      couldNotRemoveUser: "ಯೂಸರ್ ತೆಗೆದುಹಾಕಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      userRemovedSuccessfully: "ಯೂಸರ್ ಯಶಸ್ವಿಯಾಗಿ ತೆಗೆದುಹಾಕಲಾಗಿದೆ",
      backToGroups: "ಗ್ರೂಪ್‌ಗಳಿಗೆ ಹಿಂತಿರುಗಿ",
      groupMembership: "ಗ್ರೂಪ್ ಮೆಂಬರ್‌ಶಿಪ್",
      groupMembers: "ಗ್ರೂಪ್ ಮೆಂಬರ್‌ಗಳು",
      groupMembersDescription: "ಈ ಗ್ರೂಪ್‌ನ ಮೆಂಬರ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
      totalMembers: "ಒಟ್ಟು ಮೆಂಬರ್‌ಗಳು",
      status: "ಸ್ಥಿತಿ",
      active: "ಸಕ್ರಿಯ",
      membershipDirectory: "ಮೆಂಬರ್‌ಶಿಪ್ ಡೈರೆಕ್ಟರಿ",
      members: "ಮೆಂಬರ್‌ಗಳು",
      member: "ಮೆಂಬರ್",
      enterUserId: "ಯೂಸರ್ ID ನಮೂದಿಸಿ",
      addUser: "ಯೂಸರ್ ಸೇರಿಸಿ",
      noMembersYet: "ಇನ್ನೂ ಯಾವುದೇ ಮೆಂಬರ್‌ಗಳು ಇಲ್ಲ",
      adminNoMembersDescription: "ಈ ಗ್ರೂಪ್‌ಗೆ ಇನ್ನೂ ಯಾವುದೇ ಮೆಂಬರ್‌ಗಳನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ",
      userNoMembersDescription: "ಈ ಗ್ರೂಪ್‌ನಲ್ಲಿ ಪ್ರಸ್ತುತ ಯಾವುದೇ ಮೆಂಬರ್‌ಗಳು ಇಲ್ಲ",
      user: "ಯೂಸರ್",
      email: "ಇಮೇಲ್",
      action: "ಕ್ರಿಯೆ",
      groupMember: "ಗ್ರೂಪ್ ಮೆಂಬರ್",
      remove: "ತೆಗೆದುಹಾಕಿ",

      // Evaluation Tester
      flagEvaluation: "ಫ್ಲ್ಯಾಗ್ ಇವಾಲ್ಯುಯೇಷನ್",
      evaluationTester: "ಇವಾಲ್ಯುಯೇಷನ್ ಟೆಸ್ಟರ್",
      evaluationTesterDescription: "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಇವಾಲ್ಯುಯೇಷನ್ ಅನ್ನು ಪರೀಕ್ಷಿಸಿ",
      testConfiguration: "ಟೆಸ್ಟ್ ಕಾನ್ಫಿಗರೇಶನ್",
      evaluateFeatureFlag: "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಅನ್ನು ಇವಾಲ್ಯುಯೇಟ್ ಮಾಡಿ",
      selectFeatureFlag: "ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಆಯ್ಕೆಮಾಡಿ",
      selectEnvironment: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಆಯ್ಕೆಮಾಡಿ",
      userIdExample: "ಉದಾ. 123",
      groupsExample: "ಉದಾ. developers",
      evaluating: "ಇವಾಲ್ಯುಯೇಟ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
      evaluateFlag: "ಫ್ಲ್ಯಾಗ್ ಇವಾಲ್ಯುಯೇಟ್ ಮಾಡಿ",
      evaluationResult: "ಇವಾಲ್ಯುಯೇಷನ್ ಫಲಿತಾಂಶ",
      decisionDetails: "ನಿರ್ಧಾರದ ವಿವರಗಳು",
      rollout: "ರೋಲ್‌ಔಟ್",
      bucket: "ಬಕೆಟ್",
      reason: "ಕಾರಣ",
      finalResult: "ಅಂತಿಮ ಫಲಿತಾಂಶ",
      enabled: "ಸಕ್ರಿಯ",
      disabled: "ನಿಷ್ಕ್ರಿಯ",
      howItWasDecided: "ನಿರ್ಧಾರವನ್ನು ಹೇಗೆ ತೆಗೆದುಕೊಳ್ಳಲಾಯಿತು",
      userEvaluatedFor: "ಯೂಸರ್‌ಗಾಗಿ ಇವಾಲ್ಯುಯೇಷನ್",
      wasEvaluatedFor: "ಇದಕ್ಕಾಗಿ ಇವಾಲ್ಯುಯೇಟ್ ಮಾಡಲಾಗಿದೆ",
      evaluationReason: "ಇವಾಲ್ಯುಯೇಷನ್ ಕಾರಣ",
      deterministicBucket: "ಡಿಟರ್ಮಿನಿಸ್ಟಿಕ್ ಬಕೆಟ್",
      andRollout: "ಮತ್ತು ರೋಲ್‌ಔಟ್",
      noRolloutBucket: "ರೋಲ್‌ಔಟ್ ಇಲ್ಲದ ಕಾರಣ ಬಕೆಟ್ ಇಲ್ಲ",
      notAuthenticated: "ಆಥೆಂಟಿಕೇಟ್ ಆಗಿಲ್ಲ",
      sessionExpired: "ಸೆಷನ್ ಮುಗಿದಿದೆ",
      couldNotLoadFlagsEnvironments: "ಫ್ಲ್ಯಾಗ್‌ಗಳು ಮತ್ತು ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      selectFlagEnvironmentUser: "ಫ್ಲ್ಯಾಗ್, ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಮತ್ತು ಯೂಸರ್ ಆಯ್ಕೆಮಾಡಿ",
      couldNotEvaluateFlag: "ಫ್ಲ್ಯಾಗ್ ಇವಾಲ್ಯುಯೇಟ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",

      // Environments
      configuration: "ಕಾನ್ಫಿಗರೇಶನ್",
      environmentsDescription: "ನಿಮ್ಮ ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್‌ಗಳಿಗಾಗಿ ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
      couldNotLoadEnvironments: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      environmentNameRequired: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಹೆಸರು ಅಗತ್ಯವಿದೆ",
      couldNotCreateEnvironment: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      environmentCreated: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಯಶಸ್ವಿಯಾಗಿ ರಚಿಸಲಾಗಿದೆ",
      confirmDeleteEnvironment: "ಈ ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಅನ್ನು ಅಳಿಸಲು ಬಯಸುವಿರಾ?",
      couldNotDeleteEnvironment: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಅಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      environmentDeleted: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ",
      totalEnvironments: "ಒಟ್ಟು ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳು",
      available: "ಲಭ್ಯವಿದೆ",
      createEnvironment: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ರಚಿಸಿ",
      addEnvironment: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಸೇರಿಸಿ",
      environmentName: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಹೆಸರು",
      environmentNamePlaceholder: "ಉದಾ. Production",
      description: "ವಿವರಣೆ",
      environmentDescriptionPlaceholder: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ವಿವರಣೆಯನ್ನು ನಮೂದಿಸಿ",
      createEnvironmentButton: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ರಚಿಸಿ",
      environmentDirectory: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಡೈರೆಕ್ಟರಿ",
      allEnvironments: "ಎಲ್ಲಾ ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳು",
      loadingEnvironments: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...",
      noEnvironmentsFound: "ಯಾವುದೇ ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
      noDescriptionProvided: "ಯಾವುದೇ ವಿವರಣೆ ನೀಡಲಾಗಿಲ್ಲ",

      // Overrides
      environmentOverrides: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಓವರ್‌ರೈಡ್‌ಗಳು",
      environmentOverridesDescription: "ವಿವಿಧ ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ಗಳಿಗಾಗಿ ಫೀಚರ್ ಫ್ಲ್ಯಾಗ್ ಮೌಲ್ಯಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
      couldNotLoadOverridesData: "ಓವರ್‌ರೈಡ್ ಡೇಟಾವನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      selectFlagAndEnvironment: "ಫ್ಲ್ಯಾಗ್ ಮತ್ತು ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಆಯ್ಕೆಮಾಡಿ",
      couldNotCreateOverride: "ಓವರ್‌ರೈಡ್ ರಚಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      confirmDeleteOverride: "ಈ ಓವರ್‌ರೈಡ್ ಅನ್ನು ಅಳಿಸಲು ಬಯಸುವಿರಾ?",
      couldNotDeleteOverride: "ಓವರ್‌ರೈಡ್ ಅಳಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      totalOverrides: "ಒಟ್ಟು ಓವರ್‌ರೈಡ್‌ಗಳು",
      activeConfiguration: "ಸಕ್ರಿಯ ಕಾನ್ಫಿಗರೇಶನ್",
      createOverride: "ಓವರ್‌ರೈಡ್ ರಚಿಸಿ",
      addEnvironmentOverride: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಓವರ್‌ರೈಡ್ ಸೇರಿಸಿ",
      overrideValue: "ಓವರ್‌ರೈಡ್ ಮೌಲ್ಯ",
      enabledTrue: "ಸಕ್ರಿಯ (True)",
      disabledFalse: "ನಿಷ್ಕ್ರಿಯ (False)",
      createOverrideButton: "ಓವರ್‌ರೈಡ್ ರಚಿಸಿ",
      existingOverrides: "ಪ್ರಸ್ತುತ ಓವರ್‌ರೈಡ್‌ಗಳು",
      loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      noEnvironmentOverrides: "ಯಾವುದೇ ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ಓವರ್‌ರೈಡ್‌ಗಳು ಇಲ್ಲ",
      value: "ಮೌಲ್ಯ",

      // Audit Logs
      systemActivity: "ಸಿಸ್ಟಮ್ ಚಟುವಟಿಕೆ",
      auditLogsDescription: "ಸಿಸ್ಟಮ್‌ನಲ್ಲಿ ನಡೆದ ಎಲ್ಲಾ ಬದಲಾವಣೆಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಯನ್ನು ನೋಡಿ",
      totalLogs: "ಒಟ್ಟು ಲಾಗ್‌ಗಳು",
      logFilters: "ಲಾಗ್ ಫಿಲ್ಟರ್‌ಗಳು",
      filterAuditLogs: "ಆಡಿಟ್ ಲಾಗ್‌ಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ",
      allActions: "ಎಲ್ಲಾ ಕ್ರಿಯೆಗಳು",
      flagKey: "ಫ್ಲ್ಯಾಗ್ ಕೀ",
      dateFrom: "ದಿನಾಂಕದಿಂದ",
      dateTo: "ದಿನಾಂಕದವರೆಗೆ",
      applyFilters: "ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಅನ್ವಯಿಸಿ",
      clearFilters: "ಫಿಲ್ಟರ್‌ಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ",
      activityHistory: "ಚಟುವಟಿಕೆ ಇತಿಹಾಸ",
      auditLogRecords: "ಆಡಿಟ್ ಲಾಗ್ ದಾಖಲೆಗಳು",
      logs: "ಲಾಗ್‌ಗಳು",
      log: "ಲಾಗ್",
      id: "ID",
      flag: "ಫ್ಲ್ಯಾಗ್",
      oldValue: "ಹಳೆಯ ಮೌಲ್ಯ",
      newValue: "ಹೊಸ ಮೌಲ್ಯ",
      timestamp: "ಟೈಮ್‌ಸ್ಟ್ಯಾಂಪ್",
      details: "ವಿವರಗಳು",
      loadingAuditLogs: "ಆಡಿಟ್ ಲಾಗ್‌ಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ...",
      noAuditLogsFound: "ಯಾವುದೇ ಆಡಿಟ್ ಲಾಗ್‌ಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
      noAuditLogsDescription: "ಈ ಫಿಲ್ಟರ್‌ಗೆ ಯಾವುದೇ ಆಡಿಟ್ ಲಾಗ್‌ಗಳು ಲಭ್ಯವಿಲ್ಲ",
      loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ",
      viewDetails: "ವಿವರಗಳನ್ನು ನೋಡಿ",
      logDetails: "ಲಾಗ್ ವಿವರಗಳು",
      auditLogNumber: "ಆಡಿಟ್ ಲಾಗ್ #",
      close: "ಮುಚ್ಚಿ",
      flagId: "ಫ್ಲ್ಯಾಗ್ ID",
      environmentId: "ಎನ್ವಿರಾನ್‌ಮೆಂಟ್ ID",
      oldState: "ಹಳೆಯ ಸ್ಥಿತಿ",
      newState: "ಹೊಸ ಸ್ಥಿತಿ",
      closeDetails: "ವಿವರಗಳನ್ನು ಮುಚ್ಚಿ",
      failedToFetchAuditLogs: "ಆಡಿಟ್ ಲಾಗ್‌ಗಳನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
      failedToFetchAuditLogDetails: "ಆಡಿಟ್ ಲಾಗ್ ವಿವರಗಳನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ"

      
    },
  },

  // =====================================================
  // MALAYALAM
  // =====================================================
  ml: {
    translation: {
      language: "ഭാഷ",

      home: "ഡാഷ്ബോർഡ്",
      featureFlags: "ഫീച്ചർ ഫ്ലാഗുകൾ",
      environments: "എൻവയോൺമെന്റുകൾ",
      groups: "ഗ്രൂപ്പുകൾ",
      targetingRules: "ടാർഗറ്റിംഗ് നിയമങ്ങൾ",
      overrides: "ഓവർറൈഡുകൾ",
      evaluationTester: "ഇവാലുവേഷൻ ടെസ്റ്റർ",
      auditLogs: "ഓഡിറ്റ് ലോഗുകൾ",
      logout: "ലോഗൗട്ട്",

      releaseControl: "റിലീസ് കൺട്രോൾ",
      featureFlagsDescription:
        "ഫീച്ചർ ഫ്ലാഗുകൾ, സജീവമാക്കൽ, ശതമാനം അടിസ്ഥാനമാക്കിയുള്ള റോളൗട്ടുകൾ എന്നിവ നിയന്ത്രിക്കുക.",

      totalFlags: "ആകെ ഫ്ലാഗുകൾ",
      enabledFlags: "സജീവ ഫ്ലാഗുകൾ",
      rolloutEnabled: "സജീവ റോളൗട്ട്",

      flagDirectory: "ഫ്ലാഗ് പട്ടിക",
      allFeatureFlags: "എല്ലാ ഫീച്ചർ ഫ്ലാഗുകളും",
      createFeatureFlag: "ഫീച്ചർ ഫ്ലാഗ് സൃഷ്ടിക്കുക",

      noFeatureFlags:
        "ഫീച്ചർ ഫ്ലാഗുകളൊന്നും കണ്ടെത്തിയില്ല",
      featureFlagEmptyText:
        "റോളൗട്ട് നിയന്ത്രിക്കാൻ ഒരു ഫീച്ചർ ഫ്ലാഗ് സൃഷ്ടിക്കുക.",

      flag: "ഫ്ലാഗ്",
      status: "നില",
      rollout: "റോളൗട്ട്",
      owner: "ഉടമ",
      action: "പ്രവർത്തനം",

      enabled: "സജീവം",
      disabled: "നിഷ്ക്രിയം",
      viewOnly: "കാണാൻ മാത്രം",
      delete: "ഇല്ലാതാക്കുക",

      newFlag: "പുതിയ ഫ്ലാഗ്",
      flagKey: "ഫ്ലാഗ് കീ",
      type: "തരം",
      description: "വിവരണം",
      ownerTeam: "ഉടമ ടീം",
      rolloutPercentage: "റോളൗട്ട് ശതമാനം",
      enableFeatureFlag:
        "ഈ ഫീച്ചർ ഫ്ലാഗ് സജീവമാക്കുക",

      cancel: "റദ്ദാക്കുക",
      createFlag: "ഫ്ലാഗ് സൃഷ്ടിക്കുക",

      couldNotLoadFeatureFlags:
        "ഫീച്ചർ ഫ്ലാഗുകൾ ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല.",
      featureFlagKeyRequired:
        "ഫീച്ചർ ഫ്ലാഗ് കീ ആവശ്യമാണ്.",
      couldNotCreateFeatureFlag:
        "ഫീച്ചർ ഫ്ലാഗ് സൃഷ്ടിക്കാൻ കഴിഞ്ഞില്ല.",
      featureFlagCreated:
        "ഫീച്ചർ ഫ്ലാഗ് വിജയകരമായി സൃഷ്ടിച്ചു.",
      couldNotUpdateRollout:
        "റോളൗട്ട് ശതമാനം അപ്ഡേറ്റ് ചെയ്യാൻ കഴിഞ്ഞില്ല.",
      rolloutUpdated:
        "{{key}} റോളൗട്ട് {{percentage}}% ആയി അപ്ഡേറ്റ് ചെയ്തു.",
      confirmDeleteFeatureFlag:
        "ഈ ഫീച്ചർ ഫ്ലാഗ് ഇല്ലാതാക്കണമെന്ന് ഉറപ്പാണോ?",
      couldNotDeleteFeatureFlag:
        "ഫീച്ചർ ഫ്ലാഗ് ഇല്ലാതാക്കാൻ കഴിഞ്ഞില്ല.",
      featureFlagDeleted:
        "ഫീച്ചർ ഫ്ലാഗ് വിജയകരമായി ഇല്ലാതാക്കി.",

      flagDescriptionPlaceholder:
        "ഈ ഫ്ലാഗ് എന്താണ് നിയന്ത്രിക്കുന്നത്?",

      //Home/dashboard 
      releaseControlHub: "റിലീസ് കൺട്രോൾ ഹബ്",
      featureManagementConsole: "ഫീച്ചർ മാനേജ്മെന്റ് കൺസോൾ",
      dashboardDescription: "നിങ്ങളുടെ ഫീച്ചർ ഫ്ലാഗുകളും സിസ്റ്റം പ്രവർത്തനങ്ങളും നിയന്ത്രിക്കുക",
      signedInAs: "ഈ പേരിൽ സൈൻ ഇൻ ചെയ്തിരിക്കുന്നു",
      totalFeatureFlags: "ആകെ ഫീച്ചർ ഫ്ലാഗുകൾ",
      activeFlags: "സജീവ ഫ്ലാഗുകൾ",
      environmentsCount: "എൻവയോൺമെന്റുകൾ",
      overridesCount: "ഓവർറൈഡുകൾ",
      todaysEvaluations: "ഇന്നത്തെ ഇവാലുവേഷനുകൾ",
      auditLogsToday: "ഇന്നത്തെ ഓഡിറ്റ് ലോഗുകൾ",

      evaluationAnalytics: "ഇവാലുവേഷൻ അനലിറ്റിക്സ്",
      featureFlagEvaluations: "ഫീച്ചർ ഫ്ലാഗ് ഇവാലുവേഷനുകൾ",
      evaluationActivity: "ഇവാലുവേഷൻ പ്രവർത്തനം",
      totalEvaluations: "ആകെ ഇവാലുവേഷനുകൾ",
      loadingAnalytics: "അനലിറ്റിക്സ് ലോഡ് ചെയ്യുന്നു...",
      noEvaluationData: "ഇവാലുവേഷൻ ഡാറ്റ ലഭ്യമല്ല",
      evaluations: "ഇവാലുവേഷനുകൾ",
      time: "സമയം",

      flagAnalytics: "ഫ്ലാഗ് അനലിറ്റിക്സ്",
      evaluationsByFeatureFlag: "ഫീച്ചർ ഫ്ലാഗ് അനുസരിച്ചുള്ള ഇവാലുവേഷനുകൾ",
      flagEvaluationDescription: "ഓരോ ഫീച്ചർ ഫ്ലാഗിന്റെയും ഇവാലുവേഷന്റെ അവലോകനം",
      loadingFlagAnalytics: "ഫ്ലാഗ് അനലിറ്റിക്സ് ലോഡ് ചെയ്യുന്നു...",
      noFlagAnalytics: "ഫ്ലാഗ് അനലിറ്റിക്സ് ലഭ്യമല്ല",
      evaluation: "ഇവാലുവേഷൻ",
      evaluationsPlural: "ഇവാലുവേഷനുകൾ",

      environmentAnalytics: "എൻവയോൺമെന്റ് അനലിറ്റിക്സ്",
      environmentUsage: "എൻവയോൺമെന്റ് ഉപയോഗം",
      environmentUsageDescription: "വിവിധ എൻവയോൺമെന്റുകളിലെ ഫീച്ചർ ഫ്ലാഗ് ഉപയോഗം",
      loadingEnvironmentUsage: "എൻവയോൺമെന്റ് ഉപയോഗം ലോഡ് ചെയ്യുന്നു...",
      noEnvironmentUsage: "എൻവയോൺമെന്റ് ഉപയോഗ ഡാറ്റ ലഭ്യമല്ല",

      auditActivity: "ഓഡിറ്റ് പ്രവർത്തനം",
      recentAuditLogs: "സമീപകാല ഓഡിറ്റ് ലോഗുകൾ",
      latestChanges: "ഏറ്റവും പുതിയ മാറ്റങ്ങൾ",
      viewAll: "എല്ലാം കാണുക",
      loadingAuditLogs: "ഓഡിറ്റ് ലോഗുകൾ ലോഡ് ചെയ്യുന്നു...",
      noAuditActivity: "ഓഡിറ്റ് പ്രവർത്തനം ലഭ്യമല്ല",
      actor: "ഉപയോക്താവ്",

      welcome: "സ്വാഗതം",
      welcomeTitle: "ഫീച്ചർ മാനേജ്മെന്റ് കൺസോളിലേക്ക് സ്വാഗതം",
      welcomeDescription: "ഫീച്ചർ ഫ്ലാഗുകൾ, എൻവയോൺമെന്റുകൾ, സിസ്റ്റം പ്രവർത്തനങ്ങൾ എന്നിവ നിയന്ത്രിക്കുക",
      manageFeatureFlags: "ഫീച്ചർ ഫ്ലാഗുകൾ നിയന്ത്രിക്കുക",

      // Groups
      couldNotLoadGroups: "ഗ്രൂപ്പുകൾ ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല",
      groupNameRequired: "ഗ്രൂപ്പിന്റെ പേര് ആവശ്യമാണ്",
      couldNotCreateGroup: "ഗ്രൂപ്പ് സൃഷ്ടിക്കാൻ കഴിഞ്ഞില്ല",
      groupCreated: "ഗ്രൂപ്പ് വിജയകരമായി സൃഷ്ടിച്ചു",
      confirmDeleteGroup: "ഈ ഗ്രൂപ്പ് ഇല്ലാതാക്കണോ?",
      couldNotDeleteGroup: "ഗ്രൂപ്പ് ഇല്ലാതാക്കാൻ കഴിഞ്ഞില്ല",
      groupDeleted: "ഗ്രൂപ്പ് വിജയകരമായി ഇല്ലാതാക്കി",
      userManagement: "യൂസർ മാനേജ്മെന്റ്",
      userGroups: "യൂസർ ഗ്രൂപ്പുകൾ",
      userGroupsDescription: "യൂസർമാരെ ഗ്രൂപ്പുകളിൽ നിയന്ത്രിക്കുക",
      searchGroups: "ഗ്രൂപ്പുകൾ തിരയുക",
      createGroup: "ഗ്രൂപ്പ് സൃഷ്ടിക്കുക",
      groupDirectory: "ഗ്രൂപ്പ് ഡയറക്ടറി",
      allGroups: "എല്ലാ ഗ്രൂപ്പുകളും",
      groups: "ഗ്രൂപ്പുകൾ",
      group: "ഗ്രൂപ്പ്",
      noGroupsFound: "ഗ്രൂപ്പുകളൊന്നും കണ്ടെത്തിയില്ല",
      noGroupsDescription: "ഇതുവരെ ഗ്രൂപ്പുകളൊന്നും ലഭ്യമല്ല",
      groupId: "ഗ്രൂപ്പ് ID",
      created: "സൃഷ്ടിച്ചത്",
      actions: "പ്രവർത്തനങ്ങൾ",
      userTargetingGroup: "യൂസർ ടാർഗറ്റിംഗ് ഗ്രൂപ്പ്",
      viewMembers: "മെമ്പർമാരെ കാണുക",
      delete: "ഇല്ലാതാക്കുക",
      newGroup: "പുതിയ ഗ്രൂപ്പ്",
      createUserGroup: "യൂസർ ഗ്രൂപ്പ് സൃഷ്ടിക്കുക",
      groupName: "ഗ്രൂപ്പിന്റെ പേര്",
      groupNamePlaceholder: "ഗ്രൂപ്പിന്റെ പേര് നൽകുക",
      cancel: "റദ്ദാക്കുക",

      // Group Members
      groupNotFound: "ഗ്രൂപ്പ് കണ്ടെത്തിയില്ല",
      couldNotLoadGroupMembers: "ഗ്രൂപ്പ് മെമ്പർമാരെ ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല",
      userIdRequired: "യൂസർ ID ആവശ്യമാണ്",
      couldNotAddUser: "യൂസറെ ചേർക്കാൻ കഴിഞ്ഞില്ല",
      userAddedSuccessfully: "യൂസറെ വിജയകരമായി ചേർത്തു",
      confirmRemoveUser: "ഈ യൂസറെ നീക്കം ചെയ്യണോ?",
      couldNotRemoveUser: "യൂസറെ നീക്കം ചെയ്യാൻ കഴിഞ്ഞില്ല",
      userRemovedSuccessfully: "യൂസറെ വിജയകരമായി നീക്കം ചെയ്തു",
      backToGroups: "ഗ്രൂപ്പുകളിലേക്ക് മടങ്ങുക",
      groupMembership: "ഗ്രൂപ്പ് മെമ്പർഷിപ്പ്",
      groupMembers: "ഗ്രൂപ്പ് മെമ്പർമാർ",
      groupMembersDescription: "ഈ ഗ്രൂപ്പിലെ മെമ്പർമാരെ നിയന്ത്രിക്കുക",
      totalMembers: "ആകെ മെമ്പർമാർ",
      status: "നില",
      active: "സജീവം",
      membershipDirectory: "മെമ്പർഷിപ്പ് ഡയറക്ടറി",
      members: "മെമ്പർമാർ",
      member: "മെമ്പർ",
      enterUserId: "യൂസർ ID നൽകുക",
      addUser: "യൂസറെ ചേർക്കുക",
      noMembersYet: "ഇതുവരെ മെമ്പർമാരില്ല",
      adminNoMembersDescription: "ഈ ഗ്രൂപ്പിൽ ഇതുവരെ മെമ്പർമാരെ ചേർത്തിട്ടില്ല",
      userNoMembersDescription: "ഈ ഗ്രൂപ്പിൽ നിലവിൽ മെമ്പർമാരില്ല",
      user: "യൂസർ",
      email: "ഇമെയിൽ",
      action: "പ്രവർത്തനം",
      groupMember: "ഗ്രൂപ്പ് മെമ്പർ",
      remove: "നീക്കം ചെയ്യുക",

      // Evaluation Tester
      flagEvaluation: "ഫ്ലാഗ് ഇവാലുവേഷൻ",
      evaluationTester: "ഇവാലുവേഷൻ ടെസ്റ്റർ",
      evaluationTesterDescription: "ഫീച്ചർ ഫ്ലാഗിന്റെ ഇവാലുവേഷൻ പരിശോധിക്കുക",
      testConfiguration: "ടെസ്റ്റ് കോൺഫിഗറേഷൻ",
      evaluateFeatureFlag: "ഫീച്ചർ ഫ്ലാഗ് ഇവാലുവേറ്റ് ചെയ്യുക",
      selectFeatureFlag: "ഫീച്ചർ ഫ്ലാഗ് തിരഞ്ഞെടുക്കുക",
      selectEnvironment: "എൻവയോൺമെന്റ് തിരഞ്ഞെടുക്കുക",
      userIdExample: "ഉദാ. 123",
      groupsExample: "ഉദാ. developers",
      evaluating: "ഇവാലുവേറ്റ് ചെയ്യുന്നു...",
      evaluateFlag: "ഫ്ലാഗ് ഇവാലുവേറ്റ് ചെയ്യുക",
      evaluationResult: "ഇവാലുവേഷൻ ഫലം",
      decisionDetails: "തീരുമാനത്തിന്റെ വിശദാംശങ്ങൾ",
      rollout: "റോൾഔട്ട്",
      bucket: "ബക്കറ്റ്",
      reason: "കാരണം",
      finalResult: "അന്തിമ ഫലം",
      enabled: "സജീവം",
      disabled: "നിഷ്ക്രിയം",
      howItWasDecided: "തീരുമാനം എങ്ങനെ എടുത്തു",
      userEvaluatedFor: "യൂസർക്കുള്ള ഇവാലുവേഷൻ",
      wasEvaluatedFor: "ഇതിനായി ഇവാലുവേറ്റ് ചെയ്തു",
      evaluationReason: "ഇവാലുവേഷൻ കാരണം",
      deterministicBucket: "ഡിറ്റർമിനിസ്റ്റിക് ബക്കറ്റ്",
      andRollout: "കൂടാതെ റോൾഔട്ട്",
      noRolloutBucket: "റോൾഔട്ട് ഇല്ലാത്തതിനാൽ ബക്കറ്റ് ഇല്ല",
      notAuthenticated: "ഓതന്റിക്കേറ്റ് ചെയ്തിട്ടില്ല",
      sessionExpired: "സെഷൻ അവസാനിച്ചു",
      couldNotLoadFlagsEnvironments: "ഫ്ലാഗുകളും എൻവയോൺമെന്റുകളും ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല",
      selectFlagEnvironmentUser: "ഫ്ലാഗ്, എൻവയോൺമെന്റ്, യൂസർ എന്നിവ തിരഞ്ഞെടുക്കുക",
      couldNotEvaluateFlag: "ഫ്ലാഗ് ഇവാലുവേറ്റ് ചെയ്യാൻ കഴിഞ്ഞില്ല",

      // Environments
      configuration: "കോൺഫിഗറേഷൻ",
      environmentsDescription: "നിങ്ങളുടെ ഫീച്ചർ ഫ്ലാഗുകൾക്കായുള്ള എൻവയോൺമെന്റുകൾ നിയന്ത്രിക്കുക",
      couldNotLoadEnvironments: "എൻവയോൺമെന്റുകൾ ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല",
      environmentNameRequired: "എൻവയോൺമെന്റ് പേര് ആവശ്യമാണ്",
      couldNotCreateEnvironment: "എൻവയോൺമെന്റ് സൃഷ്ടിക്കാൻ കഴിഞ്ഞില്ല",
      environmentCreated: "എൻവയോൺമെന്റ് വിജയകരമായി സൃഷ്ടിച്ചു",
      confirmDeleteEnvironment: "ഈ എൻവയോൺമെന്റ് ഇല്ലാതാക്കണോ?",
      couldNotDeleteEnvironment: "എൻവയോൺമെന്റ് ഇല്ലാതാക്കാൻ കഴിഞ്ഞില്ല",
      environmentDeleted: "എൻവയോൺമെന്റ് വിജയകരമായി ഇല്ലാതാക്കി",
      totalEnvironments: "ആകെ എൻവയോൺമെന്റുകൾ",
      available: "ലഭ്യമാണ്",
      createEnvironment: "എൻവയോൺമെന്റ് സൃഷ്ടിക്കുക",
      addEnvironment: "എൻവയോൺമെന്റ് ചേർക്കുക",
      environmentName: "എൻവയോൺമെന്റ് പേര്",
      environmentNamePlaceholder: "ഉദാ. Production",
      description: "വിവരണം",
      environmentDescriptionPlaceholder: "എൻവയോൺമെന്റിന്റെ വിവരണം നൽകുക",
      createEnvironmentButton: "എൻവയോൺമെന്റ് സൃഷ്ടിക്കുക",
      environmentDirectory: "എൻവയോൺമെന്റ് ഡയറക്ടറി",
      allEnvironments: "എല്ലാ എൻവയോൺമെന്റുകളും",
      loadingEnvironments: "എൻവയോൺമെന്റുകൾ ലോഡ് ചെയ്യുന്നു...",
      noEnvironmentsFound: "എൻവയോൺമെന്റുകളൊന്നും കണ്ടെത്തിയില്ല",
      noDescriptionProvided: "വിവരണം നൽകിയിട്ടില്ല",

      // Overrides
      environmentOverrides: "എൻവയോൺമെന്റ് ഓവർറൈഡുകൾ",
      environmentOverridesDescription: "വ്യത്യസ്ത എൻവയോൺമെന്റുകൾക്കായുള്ള ഫീച്ചർ ഫ്ലാഗ് മൂല്യങ്ങൾ നിയന്ത്രിക്കുക",
      couldNotLoadOverridesData: "ഓവർറൈഡ് ഡാറ്റ ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല",
      selectFlagAndEnvironment: "ഫ്ലാഗും എൻവയോൺമെന്റും തിരഞ്ഞെടുക്കുക",
      couldNotCreateOverride: "ഓവർറൈഡ് സൃഷ്ടിക്കാൻ കഴിഞ്ഞില്ല",
      confirmDeleteOverride: "ഈ ഓവർറൈഡ് ഇല്ലാതാക്കണോ?",
      couldNotDeleteOverride: "ഓവർറൈഡ് ഇല്ലാതാക്കാൻ കഴിഞ്ഞില്ല",
      totalOverrides: "ആകെ ഓവർറൈഡുകൾ",
      activeConfiguration: "സജീവ കോൺഫിഗറേഷൻ",
      createOverride: "ഓവർറൈഡ് സൃഷ്ടിക്കുക",
      addEnvironmentOverride: "എൻവയോൺമെന്റ് ഓവർറൈഡ് ചേർക്കുക",
      overrideValue: "ഓവർറൈഡ് മൂല്യം",
      enabledTrue: "സജീവം (True)",
      disabledFalse: "നിഷ്ക്രിയം (False)",
      createOverrideButton: "ഓവർറൈഡ് സൃഷ്ടിക്കുക",
      existingOverrides: "നിലവിലുള്ള ഓവർറൈഡുകൾ",
      loading: "ലോഡ് ചെയ്യുന്നു...",
      noEnvironmentOverrides: "എൻവയോൺമെന്റ് ഓവർറൈഡുകളൊന്നുമില്ല",
      value: "മൂല്യം",

      // Audit Logs
      systemActivity: "സിസ്റ്റം പ്രവർത്തനം",
      auditLogsDescription: "സിസ്റ്റത്തിലെ എല്ലാ മാറ്റങ്ങളും പ്രവർത്തനങ്ങളും കാണുക",
      totalLogs: "ആകെ ലോഗുകൾ",
      logFilters: "ലോഗ് ഫിൽട്ടറുകൾ",
      filterAuditLogs: "ഓഡിറ്റ് ലോഗുകൾ ഫിൽട്ടർ ചെയ്യുക",
      allActions: "എല്ലാ പ്രവർത്തനങ്ങളും",
      flagKey: "ഫ്ലാഗ് കീ",
      dateFrom: "തീയതി മുതൽ",
      dateTo: "തീയതി വരെ",
      applyFilters: "ഫിൽട്ടറുകൾ പ്രയോഗിക്കുക",
      clearFilters: "ഫിൽട്ടറുകൾ നീക്കം ചെയ്യുക",
      activityHistory: "പ്രവർത്തന ചരിത്രം",
      auditLogRecords: "ഓഡിറ്റ് ലോഗ് റെക്കോർഡുകൾ",
      logs: "ലോഗുകൾ",
      log: "ലോഗ്",
      id: "ID",
      flag: "ഫ്ലാഗ്",
      oldValue: "പഴയ മൂല്യം",
      newValue: "പുതിയ മൂല്യം",
      timestamp: "ടൈംസ്റ്റാമ്പ്",
      details: "വിശദാംശങ്ങൾ",
      loadingAuditLogs: "ഓഡിറ്റ് ലോഗുകൾ ലോഡ് ചെയ്യുന്നു...",
      noAuditLogsFound: "ഓഡിറ്റ് ലോഗുകളൊന്നും കണ്ടെത്തിയില്ല",
      noAuditLogsDescription: "ഈ ഫിൽട്ടറിന് ഓഡിറ്റ് ലോഗുകളൊന്നും ലഭ്യമല്ല",
      loading: "ലോഡ് ചെയ്യുന്നു",
      viewDetails: "വിശദാംശങ്ങൾ കാണുക",
      logDetails: "ലോഗ് വിശദാംശങ്ങൾ",
      auditLogNumber: "ഓഡിറ്റ് ലോഗ് #",
      close: "അടയ്ക്കുക",
      flagId: "ഫ്ലാഗ് ID",
      environmentId: "എൻവയോൺമെന്റ് ID",
      oldState: "പഴയ അവസ്ഥ",
      newState: "പുതിയ അവസ്ഥ",
      closeDetails: "വിശദാംശങ്ങൾ അടയ്ക്കുക",
      failedToFetchAuditLogs: "ഓഡിറ്റ് ലോഗുകൾ ലഭ്യമാക്കാൻ കഴിഞ്ഞില്ല",
      failedToFetchAuditLogDetails: "ഓഡിറ്റ് ലോഗ് വിശദാംശങ്ങൾ ലഭ്യമാക്കാൻ കഴിഞ്ഞില്ല"
    },
  },

  // =====================================================
  // PUNJABI
  // =====================================================
  pa: {
    translation: {
      language: "ਭਾਸ਼ਾ",

      home: "ਡੈਸ਼ਬੋਰਡ",
      featureFlags: "ਫੀਚਰ ਫਲੈਗ",
      environments: "ਵਾਤਾਵਰਣ",
      groups: "ਗਰੁੱਪ",
      targetingRules: "ਟਾਰਗੇਟਿੰਗ ਨਿਯਮ",
      overrides: "ਓਵਰਰਾਈਡ",
      evaluationTester: "ਮੁਲਾਂਕਣ ਟੈਸਟਰ",
      auditLogs: "ਆਡਿਟ ਲੌਗ",
      logout: "ਲੌਗਆਉਟ",

      releaseControl: "ਰਿਲੀਜ਼ ਕੰਟਰੋਲ",
      featureFlagsDescription:
        "ਫੀਚਰ ਫਲੈਗ, ਐਕਟੀਵੇਸ਼ਨ ਅਤੇ ਪ੍ਰਤੀਸ਼ਤ ਅਧਾਰਿਤ ਰੋਲਆਉਟ ਨੂੰ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।",

      totalFlags: "ਕੁੱਲ ਫਲੈਗ",
      enabledFlags: "ਐਕਟਿਵ ਫਲੈਗ",
      rolloutEnabled: "ਐਕਟਿਵ ਰੋਲਆਉਟ",

      flagDirectory: "ਫਲੈਗ ਸੂਚੀ",
      allFeatureFlags: "ਸਾਰੇ ਫੀਚਰ ਫਲੈਗ",
      createFeatureFlag: "ਫੀਚਰ ਫਲੈਗ ਬਣਾਓ",

      noFeatureFlags:
        "ਕੋਈ ਫੀਚਰ ਫਲੈਗ ਨਹੀਂ ਮਿਲਿਆ",
      featureFlagEmptyText:
        "ਰੋਲਆਉਟ ਪ੍ਰਬੰਧਿਤ ਕਰਨ ਲਈ ਇੱਕ ਫੀਚਰ ਫਲੈਗ ਬਣਾਓ।",

      flag: "ਫਲੈਗ",
      status: "ਸਥਿਤੀ",
      rollout: "ਰੋਲਆਉਟ",
      owner: "ਮਾਲਕ",
      action: "ਕਾਰਵਾਈ",

      enabled: "ਐਕਟਿਵ",
      disabled: "ਅਯੋਗ",
      viewOnly: "ਸਿਰਫ਼ ਵੇਖੋ",
      delete: "ਮਿਟਾਓ",

      newFlag: "ਨਵਾਂ ਫਲੈਗ",
      flagKey: "ਫਲੈਗ ਕੀ",
      type: "ਕਿਸਮ",
      description: "ਵੇਰਵਾ",
      ownerTeam: "ਮਾਲਕ ਟੀਮ",
      rolloutPercentage: "ਰੋਲਆਉਟ ਪ੍ਰਤੀਸ਼ਤ",
      enableFeatureFlag:
        "ਇਸ ਫੀਚਰ ਫਲੈਗ ਨੂੰ ਐਕਟਿਵ ਕਰੋ",

      cancel: "ਰੱਦ ਕਰੋ",
      createFlag: "ਫਲੈਗ ਬਣਾਓ",

      couldNotLoadFeatureFlags:
        "ਫੀਚਰ ਫਲੈਗ ਲੋਡ ਨਹੀਂ ਕੀਤੇ ਜਾ ਸਕੇ।",
      featureFlagKeyRequired:
        "ਫੀਚਰ ਫਲੈਗ ਕੀ ਜ਼ਰੂਰੀ ਹੈ।",
      couldNotCreateFeatureFlag:
        "ਫੀਚਰ ਫਲੈਗ ਬਣਾਇਆ ਨਹੀਂ ਜਾ ਸਕਿਆ।",
      featureFlagCreated:
        "ਫੀਚਰ ਫਲੈਗ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਇਆ ਗਿਆ।",
      couldNotUpdateRollout:
        "ਰੋਲਆਉਟ ਪ੍ਰਤੀਸ਼ਤ ਅਪਡੇਟ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਿਆ।",
      rolloutUpdated:
        "{{key}} ਰੋਲਆਉਟ {{percentage}}% 'ਤੇ ਅਪਡੇਟ ਕੀਤਾ ਗਿਆ।",
      confirmDeleteFeatureFlag:
        "ਕੀ ਤੁਸੀਂ ਸੱਚਮੁੱਚ ਇਸ ਫੀਚਰ ਫਲੈਗ ਨੂੰ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?",
      couldNotDeleteFeatureFlag:
        "ਫੀਚਰ ਫਲੈਗ ਮਿਟਾਇਆ ਨਹੀਂ ਜਾ ਸਕਿਆ।",
      featureFlagDeleted:
        "ਫੀਚਰ ਫਲੈਗ ਸਫਲਤਾਪੂਰਵਕ ਮਿਟਾਇਆ ਗਿਆ।",

      flagDescriptionPlaceholder:
        "ਇਹ ਫਲੈਗ ਕੀ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ?",

      // Home / Dashboard
      releaseControlHub: "ਰਿਲੀਜ਼ ਕੰਟਰੋਲ ਹੱਬ",
      featureManagementConsole: "ਫੀਚਰ ਮੈਨੇਜਮੈਂਟ ਕੰਸੋਲ",
      dashboardDescription: "ਆਪਣੇ ਫੀਚਰ ਫਲੈਗ ਅਤੇ ਸਿਸਟਮ ਐਕਟੀਵਿਟੀ ਨੂੰ ਮੈਨੇਜ ਕਰੋ",
      signedInAs: "ਇਸ ਨਾਮ ਨਾਲ ਸਾਈਨ ਇਨ ਕੀਤਾ ਹੈ",
      totalFeatureFlags: "ਕੁੱਲ ਫੀਚਰ ਫਲੈਗ",
      activeFlags: "ਐਕਟਿਵ ਫਲੈਗ",
      environmentsCount: "ਇਨਵਾਇਰਮੈਂਟਸ",
      overridesCount: "ਓਵਰਰਾਈਡਸ",
      todaysEvaluations: "ਅੱਜ ਦੇ ਇਵੈਲੂਏਸ਼ਨ",
      auditLogsToday: "ਅੱਜ ਦੇ ਆਡਿਟ ਲੌਗ",

      evaluationAnalytics: "ਇਵੈਲੂਏਸ਼ਨ ਐਨਾਲਿਟਿਕਸ",
      featureFlagEvaluations: "ਫੀਚਰ ਫਲੈਗ ਇਵੈਲੂਏਸ਼ਨ",
      evaluationActivity: "ਇਵੈਲੂਏਸ਼ਨ ਐਕਟੀਵਿਟੀ",
      totalEvaluations: "ਕੁੱਲ ਇਵੈਲੂਏਸ਼ਨ",
      loadingAnalytics: "ਐਨਾਲਿਟਿਕਸ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
      noEvaluationData: "ਕੋਈ ਇਵੈਲੂਏਸ਼ਨ ਡਾਟਾ ਉਪਲਬਧ ਨਹੀਂ",
      evaluations: "ਇਵੈਲੂਏਸ਼ਨ",
      time: "ਸਮਾਂ",

      flagAnalytics: "ਫਲੈਗ ਐਨਾਲਿਟਿਕਸ",
      evaluationsByFeatureFlag: "ਫੀਚਰ ਫਲੈਗ ਅਨੁਸਾਰ ਇਵੈਲੂਏਸ਼ਨ",
      flagEvaluationDescription: "ਹਰੇਕ ਫੀਚਰ ਫਲੈਗ ਦੇ ਇਵੈਲੂਏਸ਼ਨ ਦਾ ਓਵਰਵਿਊ",
      loadingFlagAnalytics: "ਫਲੈਗ ਐਨਾਲਿਟਿਕਸ ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
      noFlagAnalytics: "ਕੋਈ ਫਲੈਗ ਐਨਾਲਿਟਿਕਸ ਉਪਲਬਧ ਨਹੀਂ",
      evaluation: "ਇਵੈਲੂਏਸ਼ਨ",
      evaluationsPlural: "ਇਵੈਲੂਏਸ਼ਨ",

      environmentAnalytics: "ਇਨਵਾਇਰਮੈਂਟ ਐਨਾਲਿਟਿਕਸ",
      environmentUsage: "ਇਨਵਾਇਰਮੈਂਟ ਵਰਤੋਂ",
      environmentUsageDescription: "ਵੱਖ-ਵੱਖ ਇਨਵਾਇਰਮੈਂਟਸ ਵਿੱਚ ਫੀਚਰ ਫਲੈਗ ਦੀ ਵਰਤੋਂ",
      loadingEnvironmentUsage: "ਇਨਵਾਇਰਮੈਂਟ ਵਰਤੋਂ ਲੋਡ ਹੋ ਰਹੀ ਹੈ...",
      noEnvironmentUsage: "ਇਨਵਾਇਰਮੈਂਟ ਵਰਤੋਂ ਦਾ ਡਾਟਾ ਉਪਲਬਧ ਨਹੀਂ",

      auditActivity: "ਆਡਿਟ ਐਕਟੀਵਿਟੀ",
      recentAuditLogs: "ਹਾਲੀਆ ਆਡਿਟ ਲੌਗ",
      latestChanges: "ਤਾਜ਼ਾ ਬਦਲਾਅ",
      viewAll: "ਸਾਰੇ ਵੇਖੋ",
      loadingAuditLogs: "ਆਡਿਟ ਲੌਗ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
      noAuditActivity: "ਕੋਈ ਆਡਿਟ ਐਕਟੀਵਿਟੀ ਨਹੀਂ",
      actor: "ਯੂਜ਼ਰ",

      welcome: "ਜੀ ਆਇਆਂ ਨੂੰ",
      welcomeTitle: "ਫੀਚਰ ਮੈਨੇਜਮੈਂਟ ਕੰਸੋਲ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ",
      welcomeDescription: "ਫੀਚਰ ਫਲੈਗ, ਇਨਵਾਇਰਮੈਂਟਸ ਅਤੇ ਸਿਸਟਮ ਐਕਟੀਵਿਟੀ ਨੂੰ ਮੈਨੇਜ ਕਰੋ",
      manageFeatureFlags: "ਫੀਚਰ ਫਲੈਗ ਮੈਨੇਜ ਕਰੋ",

      // Groups
      couldNotLoadGroups: "ਗਰੁੱਪ ਲੋਡ ਨਹੀਂ ਕੀਤੇ ਜਾ ਸਕੇ",
      groupNameRequired: "ਗਰੁੱਪ ਦਾ ਨਾਮ ਲੋੜੀਂਦਾ ਹੈ",
      couldNotCreateGroup: "ਗਰੁੱਪ ਨਹੀਂ ਬਣਾਇਆ ਜਾ ਸਕਿਆ",
      groupCreated: "ਗਰੁੱਪ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਇਆ ਗਿਆ",
      confirmDeleteGroup: "ਕੀ ਤੁਸੀਂ ਇਹ ਗਰੁੱਪ ਡਿਲੀਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
      couldNotDeleteGroup: "ਗਰੁੱਪ ਡਿਲੀਟ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਿਆ",
      groupDeleted: "ਗਰੁੱਪ ਸਫਲਤਾਪੂਰਵਕ ਡਿਲੀਟ ਹੋ ਗਿਆ",
      userManagement: "ਯੂਜ਼ਰ ਮੈਨੇਜਮੈਂਟ",
      userGroups: "ਯੂਜ਼ਰ ਗਰੁੱਪ",
      userGroupsDescription: "ਯੂਜ਼ਰਾਂ ਨੂੰ ਗਰੁੱਪਾਂ ਵਿੱਚ ਮੈਨੇਜ ਕਰੋ",
      searchGroups: "ਗਰੁੱਪ ਖੋਜੋ",
      createGroup: "ਗਰੁੱਪ ਬਣਾਓ",
      groupDirectory: "ਗਰੁੱਪ ਡਾਇਰੈਕਟਰੀ",
      allGroups: "ਸਾਰੇ ਗਰੁੱਪ",
      groups: "ਗਰੁੱਪ",
      group: "ਗਰੁੱਪ",
      noGroupsFound: "ਕੋਈ ਗਰੁੱਪ ਨਹੀਂ ਮਿਲਿਆ",
      noGroupsDescription: "ਅਜੇ ਕੋਈ ਗਰੁੱਪ ਉਪਲਬਧ ਨਹੀਂ ਹੈ",
      groupId: "ਗਰੁੱਪ ID",
      created: "ਬਣਾਇਆ ਗਿਆ",
      actions: "ਕਾਰਵਾਈਆਂ",
      userTargetingGroup: "ਯੂਜ਼ਰ ਟਾਰਗੇਟਿੰਗ ਗਰੁੱਪ",
      viewMembers: "ਮੈਂਬਰ ਵੇਖੋ",
      delete: "ਡਿਲੀਟ",
      newGroup: "ਨਵਾਂ ਗਰੁੱਪ",
      createUserGroup: "ਯੂਜ਼ਰ ਗਰੁੱਪ ਬਣਾਓ",
      groupName: "ਗਰੁੱਪ ਦਾ ਨਾਮ",
      groupNamePlaceholder: "ਗਰੁੱਪ ਦਾ ਨਾਮ ਦਰਜ ਕਰੋ",
      cancel: "ਰੱਦ ਕਰੋ",

      // Group Members
      groupNotFound: "ਗਰੁੱਪ ਨਹੀਂ ਮਿਲਿਆ",
      couldNotLoadGroupMembers: "ਗਰੁੱਪ ਮੈਂਬਰ ਲੋਡ ਨਹੀਂ ਕੀਤੇ ਜਾ ਸਕੇ",
      userIdRequired: "ਯੂਜ਼ਰ ID ਲੋੜੀਂਦੀ ਹੈ",
      couldNotAddUser: "ਯੂਜ਼ਰ ਸ਼ਾਮਲ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਿਆ",
      userAddedSuccessfully: "ਯੂਜ਼ਰ ਸਫਲਤਾਪੂਰਵਕ ਸ਼ਾਮਲ ਹੋ ਗਿਆ",
      confirmRemoveUser: "ਕੀ ਤੁਸੀਂ ਇਸ ਯੂਜ਼ਰ ਨੂੰ ਹਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?",
      couldNotRemoveUser: "ਯੂਜ਼ਰ ਹਟਾਇਆ ਨਹੀਂ ਜਾ ਸਕਿਆ",
      userRemovedSuccessfully: "ਯੂਜ਼ਰ ਸਫਲਤਾਪੂਰਵਕ ਹਟਾ ਦਿੱਤਾ ਗਿਆ",
      backToGroups: "ਗਰੁੱਪਾਂ ਵੱਲ ਵਾਪਸ ਜਾਓ",
      groupMembership: "ਗਰੁੱਪ ਮੈਂਬਰਸ਼ਿਪ",
      groupMembers: "ਗਰੁੱਪ ਮੈਂਬਰ",
      groupMembersDescription: "ਇਸ ਗਰੁੱਪ ਦੇ ਮੈਂਬਰਾਂ ਨੂੰ ਮੈਨੇਜ ਕਰੋ",
      totalMembers: "ਕੁੱਲ ਮੈਂਬਰ",
      status: "ਸਥਿਤੀ",
      active: "ਐਕਟਿਵ",
      membershipDirectory: "ਮੈਂਬਰਸ਼ਿਪ ਡਾਇਰੈਕਟਰੀ",
      members: "ਮੈਂਬਰ",
      member: "ਮੈਂਬਰ",
      enterUserId: "ਯੂਜ਼ਰ ID ਦਰਜ ਕਰੋ",
      addUser: "ਯੂਜ਼ਰ ਸ਼ਾਮਲ ਕਰੋ",
      noMembersYet: "ਅਜੇ ਕੋਈ ਮੈਂਬਰ ਨਹੀਂ",
      adminNoMembersDescription: "ਇਸ ਗਰੁੱਪ ਵਿੱਚ ਅਜੇ ਕੋਈ ਮੈਂਬਰ ਸ਼ਾਮਲ ਨਹੀਂ ਕੀਤਾ ਗਿਆ",
      userNoMembersDescription: "ਇਸ ਗਰੁੱਪ ਵਿੱਚ ਇਸ ਵੇਲੇ ਕੋਈ ਮੈਂਬਰ ਨਹੀਂ ਹੈ",
      user: "ਯੂਜ਼ਰ",
      email: "ਈਮੇਲ",
      action: "ਕਾਰਵਾਈ",
      groupMember: "ਗਰੁੱਪ ਮੈਂਬਰ",
      remove: "ਹਟਾਓ",

      // Evaluation Tester
      flagEvaluation: "ਫਲੈਗ ਇਵੈਲੂਏਸ਼ਨ",
      evaluationTester: "ਇਵੈਲੂਏਸ਼ਨ ਟੈਸਟਰ",
      evaluationTesterDescription: "ਫੀਚਰ ਫਲੈਗ ਦੇ ਇਵੈਲੂਏਸ਼ਨ ਦੀ ਜਾਂਚ ਕਰੋ",
      testConfiguration: "ਟੈਸਟ ਕੌਂਫਿਗਰੇਸ਼ਨ",
      evaluateFeatureFlag: "ਫੀਚਰ ਫਲੈਗ ਦਾ ਇਵੈਲੂਏਸ਼ਨ ਕਰੋ",
      selectFeatureFlag: "ਫੀਚਰ ਫਲੈਗ ਚੁਣੋ",
      selectEnvironment: "ਇਨਵਾਇਰਮੈਂਟ ਚੁਣੋ",
      userIdExample: "ਜਿਵੇਂ 123",
      groupsExample: "ਜਿਵੇਂ developers",
      evaluating: "ਇਵੈਲੂਏਟ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
      evaluateFlag: "ਫਲੈਗ ਇਵੈਲੂਏਟ ਕਰੋ",
      evaluationResult: "ਇਵੈਲੂਏਸ਼ਨ ਨਤੀਜਾ",
      decisionDetails: "ਫੈਸਲੇ ਦੇ ਵੇਰਵੇ",
      rollout: "ਰੋਲਆਉਟ",
      bucket: "ਬਕੇਟ",
      reason: "ਕਾਰਨ",
      finalResult: "ਅੰਤਿਮ ਨਤੀਜਾ",
      enabled: "ਐਕਟਿਵ",
      disabled: "ਨਿਸ਼ਕ੍ਰਿਆ",
      howItWasDecided: "ਫੈਸਲਾ ਕਿਵੇਂ ਲਿਆ ਗਿਆ",
      userEvaluatedFor: "ਯੂਜ਼ਰ ਲਈ ਇਵੈਲੂਏਸ਼ਨ",
      wasEvaluatedFor: "ਇਸ ਲਈ ਇਵੈਲੂਏਟ ਕੀਤਾ ਗਿਆ",
      evaluationReason: "ਇਵੈਲੂਏਸ਼ਨ ਦਾ ਕਾਰਨ",
      deterministicBucket: "ਡਿਟਰਮਿਨਿਸਟਿਕ ਬਕੇਟ",
      andRollout: "ਅਤੇ ਰੋਲਆਉਟ",
      noRolloutBucket: "ਰੋਲਆਉਟ ਨਾ ਹੋਣ ਕਰਕੇ ਬਕੇਟ ਨਹੀਂ ਹੈ",
      notAuthenticated: "ਆਥੈਂਟੀਕੇਟ ਨਹੀਂ ਹੈ",
      sessionExpired: "ਸੈਸ਼ਨ ਖਤਮ ਹੋ ਗਿਆ ਹੈ",
      couldNotLoadFlagsEnvironments: "ਫਲੈਗ ਅਤੇ ਇਨਵਾਇਰਮੈਂਟ ਲੋਡ ਨਹੀਂ ਕੀਤੇ ਜਾ ਸਕੇ",
      selectFlagEnvironmentUser: "ਫਲੈਗ, ਇਨਵਾਇਰਮੈਂਟ ਅਤੇ ਯੂਜ਼ਰ ਚੁਣੋ",
      couldNotEvaluateFlag: "ਫਲੈਗ ਇਵੈਲੂਏਟ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਿਆ",

      // Environments
      configuration: "ਕੌਂਫਿਗਰੇਸ਼ਨ",
      environmentsDescription: "ਆਪਣੇ ਫੀਚਰ ਫਲੈਗ ਲਈ ਇਨਵਾਇਰਮੈਂਟਸ ਮੈਨੇਜ ਕਰੋ",
      couldNotLoadEnvironments: "ਇਨਵਾਇਰਮੈਂਟਸ ਲੋਡ ਨਹੀਂ ਕੀਤੇ ਜਾ ਸਕੇ",
      environmentNameRequired: "ਇਨਵਾਇਰਮੈਂਟ ਦਾ ਨਾਮ ਲੋੜੀਂਦਾ ਹੈ",
      couldNotCreateEnvironment: "ਇਨਵਾਇਰਮੈਂਟ ਨਹੀਂ ਬਣਾਇਆ ਜਾ ਸਕਿਆ",
      environmentCreated: "ਇਨਵਾਇਰਮੈਂਟ ਸਫਲਤਾਪੂਰਵਕ ਬਣਾਇਆ ਗਿਆ",
      confirmDeleteEnvironment: "ਕੀ ਤੁਸੀਂ ਇਹ ਇਨਵਾਇਰਮੈਂਟ ਡਿਲੀਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
      couldNotDeleteEnvironment: "ਇਨਵਾਇਰਮੈਂਟ ਡਿਲੀਟ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਿਆ",
      environmentDeleted: "ਇਨਵਾਇਰਮੈਂਟ ਸਫਲਤਾਪੂਰਵਕ ਡਿਲੀਟ ਹੋ ਗਿਆ",
      totalEnvironments: "ਕੁੱਲ ਇਨਵਾਇਰਮੈਂਟਸ",
      available: "ਉਪਲਬਧ",
      createEnvironment: "ਇਨਵਾਇਰਮੈਂਟ ਬਣਾਓ",
      addEnvironment: "ਇਨਵਾਇਰਮੈਂਟ ਸ਼ਾਮਲ ਕਰੋ",
      environmentName: "ਇਨਵਾਇਰਮੈਂਟ ਦਾ ਨਾਮ",
      environmentNamePlaceholder: "ਜਿਵੇਂ Production",
      description: "ਵੇਰਵਾ",
      environmentDescriptionPlaceholder: "ਇਨਵਾਇਰਮੈਂਟ ਦਾ ਵੇਰਵਾ ਦਰਜ ਕਰੋ",
      createEnvironmentButton: "ਇਨਵਾਇਰਮੈਂਟ ਬਣਾਓ",
      environmentDirectory: "ਇਨਵਾਇਰਮੈਂਟ ਡਾਇਰੈਕਟਰੀ",
      allEnvironments: "ਸਾਰੇ ਇਨਵਾਇਰਮੈਂਟਸ",
      loadingEnvironments: "ਇਨਵਾਇਰਮੈਂਟਸ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
      noEnvironmentsFound: "ਕੋਈ ਇਨਵਾਇਰਮੈਂਟ ਨਹੀਂ ਮਿਲਿਆ",
      noDescriptionProvided: "ਕੋਈ ਵੇਰਵਾ ਨਹੀਂ ਦਿੱਤਾ ਗਿਆ",

      // Overrides
      environmentOverrides: "ਇਨਵਾਇਰਮੈਂਟ ਓਵਰਰਾਈਡਸ",
      environmentOverridesDescription: "ਵੱਖ-ਵੱਖ ਇਨਵਾਇਰਮੈਂਟਸ ਲਈ ਫੀਚਰ ਫਲੈਗ ਮੁੱਲ ਮੈਨੇਜ ਕਰੋ",
      couldNotLoadOverridesData: "ਓਵਰਰਾਈਡ ਡਾਟਾ ਲੋਡ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਿਆ",
      selectFlagAndEnvironment: "ਫਲੈਗ ਅਤੇ ਇਨਵਾਇਰਮੈਂਟ ਚੁਣੋ",
      couldNotCreateOverride: "ਓਵਰਰਾਈਡ ਨਹੀਂ ਬਣਾਇਆ ਜਾ ਸਕਿਆ",
      confirmDeleteOverride: "ਕੀ ਤੁਸੀਂ ਇਹ ਓਵਰਰਾਈਡ ਡਿਲੀਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
      couldNotDeleteOverride: "ਓਵਰਰਾਈਡ ਡਿਲੀਟ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਿਆ",
      totalOverrides: "ਕੁੱਲ ਓਵਰਰਾਈਡਸ",
      activeConfiguration: "ਐਕਟਿਵ ਕੌਂਫਿਗਰੇਸ਼ਨ",
      createOverride: "ਓਵਰਰਾਈਡ ਬਣਾਓ",
      addEnvironmentOverride: "ਇਨਵਾਇਰਮੈਂਟ ਓਵਰਰਾਈਡ ਸ਼ਾਮਲ ਕਰੋ",
      overrideValue: "ਓਵਰਰਾਈਡ ਮੁੱਲ",
      enabledTrue: "ਐਕਟਿਵ (True)",
      disabledFalse: "ਨਿਸ਼ਕ੍ਰਿਆ (False)",
      createOverrideButton: "ਓਵਰਰਾਈਡ ਬਣਾਓ",
      existingOverrides: "ਮੌਜੂਦਾ ਓਵਰਰਾਈਡਸ",
      loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
      noEnvironmentOverrides: "ਕੋਈ ਇਨਵਾਇਰਮੈਂਟ ਓਵਰਰਾਈਡ ਨਹੀਂ",
      value: "ਮੁੱਲ",

      // Audit Logs
      systemActivity: "ਸਿਸਟਮ ਐਕਟੀਵਿਟੀ",
      auditLogsDescription: "ਸਿਸਟਮ ਵਿੱਚ ਹੋਏ ਸਾਰੇ ਬਦਲਾਅ ਅਤੇ ਐਕਟੀਵਿਟੀ ਵੇਖੋ",
      totalLogs: "ਕੁੱਲ ਲੌਗ",
      logFilters: "ਲੌਗ ਫਿਲਟਰ",
      filterAuditLogs: "ਆਡਿਟ ਲੌਗ ਫਿਲਟਰ ਕਰੋ",
      allActions: "ਸਾਰੀਆਂ ਕਾਰਵਾਈਆਂ",
      flagKey: "ਫਲੈਗ ਕੀ",
      dateFrom: "ਤਾਰੀਖ ਤੋਂ",
      dateTo: "ਤਾਰੀਖ ਤੱਕ",
      applyFilters: "ਫਿਲਟਰ ਲਾਗੂ ਕਰੋ",
      clearFilters: "ਫਿਲਟਰ ਸਾਫ਼ ਕਰੋ",
      activityHistory: "ਐਕਟੀਵਿਟੀ ਹਿਸਟਰੀ",
      auditLogRecords: "ਆਡਿਟ ਲੌਗ ਰਿਕਾਰਡ",
      logs: "ਲੌਗ",
      log: "ਲੌਗ",
      id: "ID",
      flag: "ਫਲੈਗ",
      oldValue: "ਪੁਰਾਣਾ ਮੁੱਲ",
      newValue: "ਨਵਾਂ ਮੁੱਲ",
      timestamp: "ਟਾਈਮਸਟੈਂਪ",
      details: "ਵੇਰਵੇ",
      loadingAuditLogs: "ਆਡਿਟ ਲੌਗ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
      noAuditLogsFound: "ਕੋਈ ਆਡਿਟ ਲੌਗ ਨਹੀਂ ਮਿਲੇ",
      noAuditLogsDescription: "ਇਸ ਫਿਲਟਰ ਲਈ ਕੋਈ ਆਡਿਟ ਲੌਗ ਉਪਲਬਧ ਨਹੀਂ",
      loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ",
      viewDetails: "ਵੇਰਵੇ ਵੇਖੋ",
      logDetails: "ਲੌਗ ਵੇਰਵੇ",
      auditLogNumber: "ਆਡਿਟ ਲੌਗ #",
      close: "ਬੰਦ ਕਰੋ",
      flagId: "ਫਲੈਗ ID",
      environmentId: "ਇਨਵਾਇਰਮੈਂਟ ID",
      oldState: "ਪੁਰਾਣੀ ਸਥਿਤੀ",
      newState: "ਨਵੀਂ ਸਥਿਤੀ",
      closeDetails: "ਵੇਰਵੇ ਬੰਦ ਕਰੋ",
      failedToFetchAuditLogs: "ਆਡਿਟ ਲੌਗ ਪ੍ਰਾਪਤ ਨਹੀਂ ਕੀਤੇ ਜਾ ਸਕੇ",
      failedToFetchAuditLogDetails: "ਆਡਿਟ ਲੌਗ ਦੇ ਵੇਰਵੇ ਪ੍ਰਾਪਤ ਨਹੀਂ ਕੀਤੇ ਜਾ ਸਕੇ"
    },
  },
};

const savedLanguage =
  localStorage.getItem("selected_language") || "en";

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;