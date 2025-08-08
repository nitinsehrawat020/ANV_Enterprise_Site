/**
 * Test Script for Developer Intelligence Engine
 *
 * This script demonstrates the two-stage intelligence pipeline:
 * 1. Market Intelligence Gathering
 * 2. Content Brief Generation
 *
 * Run with: node test-intelligence-engine.js
 */

import intelligenceEngine from "./utils/AIContent.js";

async function testIntelligenceEngine() {
  console.log("🧪 Testing Developer Intelligence Engine...\n");

  try {
    // Get current status
    console.log("📊 Current Engine Status:");
    console.log(JSON.stringify(intelligenceEngine.getStatus(), null, 2));
    console.log("\n" + "=".repeat(60) + "\n");

    // Run the complete pipeline manually
    console.log("🚀 Executing complete intelligence pipeline...\n");
    const result = await intelligenceEngine.runNow();

    console.log("\n" + "=".repeat(60));
    console.log("📋 PIPELINE EXECUTION RESULTS:");
    console.log("=".repeat(60));

    if (result.success) {
      console.log("✅ Pipeline Status: SUCCESS");
      console.log(`⏱️  Execution Time: ${result.executionTime}`);
      console.log(`🎯 AI Provider: ${result.aiProvider}`);

      if (result.stage1) {
        console.log("\n📡 STAGE 1 - Market Intelligence:");
        console.log(
          `   Categories Analyzed: ${result.stage1.categoriesAnalyzed}`
        );
        console.log(`   Topics Discovered: ${result.stage1.topicsDiscovered}`);

        if (result.stage1.intelligence) {
          Object.entries(result.stage1.intelligence).forEach(
            ([category, topics]) => {
              console.log(`   ${category}: ${topics.length} topics`);
            }
          );
        }
      }

      if (result.stage2) {
        console.log("\n📝 STAGE 2 - Content Brief Generation:");
        console.log(
          `   Content Briefs Generated: ${result.stage2.contentBriefsGenerated}`
        );
        console.log(`   Successful Briefs: ${result.stage2.successfulBriefs}`);
        console.log(`   Failed Briefs: ${result.stage2.failedBriefs}`);
      }

      console.log(
        `\n📧 Email Status: ${result.emailSent ? "SENT ✅" : "FAILED ❌"}`
      );
      if (result.emailSent && result.messageId) {
        console.log(`   Message ID: ${result.messageId}`);
      }
    } else {
      console.log("❌ Pipeline Status: FAILED");
      console.log(`⏱️  Execution Time: ${result.executionTime}`);
      console.log(`💥 Error: ${result.error}`);
    }

    console.log("\n" + "=".repeat(60));
    console.log("🎯 NEXT STEPS:");
    console.log("=".repeat(60));
    console.log("1. Check your email for the intelligence report");
    console.log("2. Review the categorized content briefs");
    console.log("3. Use the insights for LinkedIn/Twitter content creation");
    console.log("4. The system will automatically run daily at 8:30 AM IST");
    console.log("\n📚 Each content brief includes:");
    console.log("   • Compelling Hook for engagement");
    console.log("   • Context & Relevance for MERN/backend developers");
    console.log("   • Key Takeaways with actionable insights");
    console.log("   • Call to Discussion for community engagement");
  } catch (error) {
    console.error("💥 Test execution failed:", error.message);
    console.error("🔧 Please check your .env configuration and try again");
  }
}

// Run the test
testIntelligenceEngine();
