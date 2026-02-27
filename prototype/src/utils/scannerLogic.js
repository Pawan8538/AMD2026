// SurakshaAI — Scam Pattern Database & Analysis Engine

export const SCAM_CATEGORIES = {
  TASK_FRAUD: { label: 'Task Fraud', color: '#ff3366', description: 'Fake online task/job scam patterns' },
  DEPOSIT_SCAM: { label: 'Deposit Scam', color: '#ff3366', description: 'Upfront payment/deposit request patterns' },
  FAKE_HR: { label: 'Fake HR Recruitment', color: '#ffaa00', description: 'Impersonation of companies/recruiters' },
  PHISHING: { label: 'Phishing', color: '#ff3366', description: 'Credential theft or data harvesting' },
  INVESTMENT_SCAM: { label: 'Investment Scam', color: '#ff3366', description: 'Fake investment or crypto schemes' },
  URGENCY_TACTIC: { label: 'Urgency Tactic', color: '#ffaa00', description: 'Pressure tactics to act immediately' },
};

// Each pattern: { keyword, weight (1-10), category, explanation }
export const SCAM_PATTERNS = [
  // Task Fraud
  { keyword: 'telegram group', weight: 8, category: 'TASK_FRAUD', explanation: 'Scammers recruit via Telegram groups for fake tasks' },
  { keyword: 'telegram channel', weight: 7, category: 'TASK_FRAUD', explanation: 'Recruitment through unofficial Telegram channels' },
  { keyword: 'daily earning', weight: 7, category: 'TASK_FRAUD', explanation: 'Unrealistic daily earning promises' },
  { keyword: 'earn daily', weight: 7, category: 'TASK_FRAUD', explanation: 'Unrealistic daily earning promises' },
  { keyword: 'earn from home', weight: 6, category: 'TASK_FRAUD', explanation: 'Work-from-home scam lure' },
  { keyword: 'like youtube', weight: 8, category: 'TASK_FRAUD', explanation: 'YouTube like/subscribe task scam' },
  { keyword: 'youtube likes', weight: 8, category: 'TASK_FRAUD', explanation: 'YouTube engagement fraud tasks' },
  { keyword: 'review products', weight: 6, category: 'TASK_FRAUD', explanation: 'Fake product review tasks' },
  { keyword: 'simple task', weight: 5, category: 'TASK_FRAUD', explanation: 'Vague "simple task" descriptions are common in scams' },
  { keyword: 'complete task', weight: 5, category: 'TASK_FRAUD', explanation: 'Task completion scam pattern' },
  { keyword: 'data entry job', weight: 5, category: 'TASK_FRAUD', explanation: 'Fake data entry jobs are a common scam' },
  { keyword: 'work from home', weight: 5, category: 'TASK_FRAUD', explanation: 'WFH scam lure targeting freshers' },
  { keyword: 'part time job', weight: 4, category: 'TASK_FRAUD', explanation: 'Part-time job scam targeting students' },
  { keyword: 'part-time', weight: 4, category: 'TASK_FRAUD', explanation: 'Part-time work scam indicator' },

  // Deposit Scam
  { keyword: 'security deposit', weight: 9, category: 'DEPOSIT_SCAM', explanation: 'Legitimate employers never ask for deposits' },
  { keyword: 'refundable deposit', weight: 9, category: 'DEPOSIT_SCAM', explanation: 'Refundable deposit is a classic scam trick' },
  { keyword: 'registration fee', weight: 8, category: 'DEPOSIT_SCAM', explanation: 'Real jobs never charge registration fees' },
  { keyword: 'processing fee', weight: 8, category: 'DEPOSIT_SCAM', explanation: 'Processing fees for jobs are always fraudulent' },
  { keyword: 'pay first', weight: 8, category: 'DEPOSIT_SCAM', explanation: 'Asking to pay before earning is a red flag' },
  { keyword: 'advance payment', weight: 8, category: 'DEPOSIT_SCAM', explanation: 'Advance payments for jobs are scam indicators' },
  { keyword: 'send money', weight: 7, category: 'DEPOSIT_SCAM', explanation: 'Request to send money is a major red flag' },
  { keyword: 'upi', weight: 4, category: 'DEPOSIT_SCAM', explanation: 'UPI payment requests in job offers need extra caution' },
  { keyword: 'gpay', weight: 5, category: 'DEPOSIT_SCAM', explanation: 'Google Pay requests in job context is suspicious' },
  { keyword: 'phonepe', weight: 5, category: 'DEPOSIT_SCAM', explanation: 'PhonePe payment in job context is suspicious' },
  { keyword: 'paytm', weight: 5, category: 'DEPOSIT_SCAM', explanation: 'Paytm payment in job context is suspicious' },

  // Fake HR
  { keyword: 'urgent hiring', weight: 6, category: 'FAKE_HR', explanation: 'Urgency in hiring is used to pressure targets' },
  { keyword: 'guaranteed income', weight: 8, category: 'FAKE_HR', explanation: 'No legitimate job guarantees income' },
  { keyword: 'guaranteed salary', weight: 8, category: 'FAKE_HR', explanation: 'Unrealistic salary guarantees' },
  { keyword: 'no experience required', weight: 5, category: 'FAKE_HR', explanation: 'Combined with high pay, this is suspicious' },
  { keyword: 'no interview', weight: 7, category: 'FAKE_HR', explanation: 'Skipping interviews is a hiring fraud indicator' },
  { keyword: 'direct joining', weight: 6, category: 'FAKE_HR', explanation: 'Direct joining without process is suspicious' },
  { keyword: 'spot offer', weight: 7, category: 'FAKE_HR', explanation: 'Instant offers without verification are red flags' },
  { keyword: 'offer letter', weight: 3, category: 'FAKE_HR', explanation: 'Fake offer letters are common in recruitment scams' },
  { keyword: 'selected candidate', weight: 5, category: 'FAKE_HR', explanation: 'Unsolicited selection notifications are suspicious' },
  { keyword: 'congratulations you', weight: 6, category: 'FAKE_HR', explanation: 'Congratulatory messages for unsolicited selection' },

  // Phishing
  { keyword: 'click this link', weight: 7, category: 'PHISHING', explanation: 'Suspicious link sharing is a phishing indicator' },
  { keyword: 'verify your account', weight: 7, category: 'PHISHING', explanation: 'Account verification requests via chat are phishing' },
  { keyword: 'share otp', weight: 9, category: 'PHISHING', explanation: 'OTP sharing is the most common phishing attack' },
  { keyword: 'share your otp', weight: 9, category: 'PHISHING', explanation: 'Never share OTP with anyone' },
  { keyword: 'bank details', weight: 7, category: 'PHISHING', explanation: 'Requesting bank details via chat is dangerous' },
  { keyword: 'aadhaar', weight: 5, category: 'PHISHING', explanation: 'Aadhaar sharing in informal contexts is suspicious' },
  { keyword: 'pan card', weight: 5, category: 'PHISHING', explanation: 'PAN card sharing in informal job offers is risky' },

  // Investment Scam
  { keyword: 'invest', weight: 4, category: 'INVESTMENT_SCAM', explanation: 'Investment requests in job contexts are suspicious' },
  { keyword: 'crypto', weight: 5, category: 'INVESTMENT_SCAM', explanation: 'Cryptocurrency schemes mixed with jobs are scams' },
  { keyword: 'double your money', weight: 9, category: 'INVESTMENT_SCAM', explanation: 'Money doubling promises are always scams' },
  { keyword: 'high returns', weight: 7, category: 'INVESTMENT_SCAM', explanation: 'Unrealistic return promises' },
  { keyword: 'trading', weight: 4, category: 'INVESTMENT_SCAM', explanation: 'Trading tasks in job offers are suspicious' },

  // Urgency Tactics
  { keyword: 'limited seats', weight: 6, category: 'URGENCY_TACTIC', explanation: 'Artificial scarcity creates pressure' },
  { keyword: 'last date', weight: 4, category: 'URGENCY_TACTIC', explanation: 'Fake deadlines pressure quick decisions' },
  { keyword: 'hurry', weight: 5, category: 'URGENCY_TACTIC', explanation: 'Urgency language to prevent rational thinking' },
  { keyword: 'act now', weight: 6, category: 'URGENCY_TACTIC', explanation: 'Immediate action pressure is a manipulation tactic' },
  { keyword: 'today only', weight: 6, category: 'URGENCY_TACTIC', explanation: 'Time-limited offers create false urgency' },
  { keyword: 'offer expires', weight: 6, category: 'URGENCY_TACTIC', explanation: 'Expiring offers pressure quick decisions' },
];

export function analyzeText(text) {
  if (!text || text.trim().length === 0) {
    return { score: 0, riskLevel: 'SAFE', matches: [], categories: {}, recommendation: '' };
  }

  const lowerText = text.toLowerCase();
  const matches = [];
  const categoryScores = {};

  for (const pattern of SCAM_PATTERNS) {
    if (lowerText.includes(pattern.keyword.toLowerCase())) {
      matches.push({
        keyword: pattern.keyword,
        weight: pattern.weight,
        category: pattern.category,
        categoryLabel: SCAM_CATEGORIES[pattern.category]?.label || pattern.category,
        categoryColor: SCAM_CATEGORIES[pattern.category]?.color || '#ff3366',
        explanation: pattern.explanation,
      });

      if (!categoryScores[pattern.category]) {
        categoryScores[pattern.category] = 0;
      }
      categoryScores[pattern.category] += pattern.weight;
    }
  }

  // Calculate total score (capped at 100)
  const rawScore = matches.reduce((sum, m) => sum + m.weight, 0);
  const score = Math.min(100, Math.round((rawScore / 30) * 100));

  // Determine risk level
  let riskLevel, recommendation;
  if (score >= 70) {
    riskLevel = 'HIGH';
    recommendation = 'This message shows strong indicators of a scam. Do NOT share personal information, bank details, or make any payments. Block and report the sender immediately.';
  } else if (score >= 40) {
    riskLevel = 'MEDIUM';
    recommendation = 'This message contains suspicious patterns. Proceed with extreme caution. Verify the sender\'s identity through official channels before responding.';
  } else if (score > 0) {
    riskLevel = 'LOW';
    recommendation = 'Minor suspicious indicators detected. While this may be legitimate, remain cautious and verify claims independently.';
  } else {
    riskLevel = 'SAFE';
    recommendation = 'No known scam patterns detected in this text. However, always exercise caution when sharing personal information online.';
  }

  // Top category
  const topCategory = Object.entries(categoryScores)
    .sort(([, a], [, b]) => b - a)[0];

  return {
    score,
    riskLevel,
    matches: matches.sort((a, b) => b.weight - a.weight),
    categories: categoryScores,
    topCategory: topCategory ? {
      key: topCategory[0],
      ...SCAM_CATEGORIES[topCategory[0]],
    } : null,
    recommendation,
    totalPatterns: matches.length,
  };
}

export function highlightKeywords(text, matches) {
  if (!matches || matches.length === 0) return text;

  let highlighted = text;
  const sortedMatches = [...matches].sort((a, b) => b.keyword.length - a.keyword.length);

  for (const match of sortedMatches) {
    const regex = new RegExp(`(${escapeRegex(match.keyword)})`, 'gi');
    highlighted = highlighted.replace(
      regex,
      `<mark class="scam-highlight" style="background: ${match.categoryColor}22; color: ${match.categoryColor}; border-bottom: 2px solid ${match.categoryColor}; padding: 0 2px;">$1</mark>`
    );
  }

  return highlighted;
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
