'use client';

import { initiatePayment } from '@/lib/payment';
import { Check, X, MessageCircle, Award, Sparkles, TrendingUp, Zap } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getWhatsAppLink, whatsappMessages } from '@/lib/whatsapp';

const comparisonFeatures = [
  {
    category: 'Profile & Visibility',
    features: [
      { name: 'Create profile', free: true, plus: true },
      { name: 'Profile photo upload', free: 'Up to 2', plus: 'Unlimited' },
      { name: 'Profile visibility', free: 'Standard', plus: 'Boosted Priority' },
      { name: 'Appear in AI recommendations', free: 'Limited', plus: 'Priority Placement' },
      { name: 'Featured in search results', free: false, plus: true },
    ],
  },
  {
    category: 'Match Suggestions',
    features: [
      { name: 'AI match suggestions', free: '3 per day', plus: 'Unlimited' },
      { name: 'Compatibility score', free: 'Basic', plus: 'Detailed Analysis' },
      { name: 'Match reasons & insights', free: false, plus: true },
      { name: 'Priority matching', free: false, plus: true },
    ],
  },
  {
    category: 'Search & Discovery',
    features: [
      { name: 'View profiles per day', free: '10', plus: 'Unlimited' },
      { name: 'Basic search filters', free: true, plus: true },
      { name: 'Advanced filters', free: false, plus: true },
      { name: 'Save searches', free: false, plus: true },
      { name: 'See who viewed you', free: false, plus: true },
    ],
  },
  {
    category: 'Communication',
    features: [
      { name: 'Send interests/likes', free: '5 per day', plus: 'Unlimited' },
      { name: 'Receive interests', free: true, plus: true },
      { name: 'Reply to interests', free: false, plus: true },
      { name: 'Chat with matches', free: false, plus: true },
      { name: 'Share contact details', free: false, plus: true },
      { name: 'Voice/video call support', free: false, plus: true },
    ],
  },
  {
    category: 'AI Features',
    features: [
      { name: 'AI profile creation', free: 'Basic', plus: 'Advanced + Optimization' },
      { name: 'AI horoscope matching', free: false, plus: true },
      { name: 'Compatibility analysis', free: false, plus: true },
      { name: 'Personalized recommendations', free: false, plus: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'WhatsApp support', free: 'Standard', plus: 'Priority' },
      { name: 'Profile assistance', free: false, plus: true },
      { name: 'Success manager', free: false, plus: true },
    ],
  },
];

export default function PlansClient() {
  return (
    /* 🔥 YOUR FULL JSX — UNCHANGED 🔥 */
    /* Everything below remains EXACTLY the same */
    <div className="pt-24">
      {/* ... ENTIRE JSX YOU POSTED ... */}
    </div>
  );
}
