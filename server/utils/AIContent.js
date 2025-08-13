/*
 * Developer Intelligence Engine for MERN Stack & Backend Development
 *
 * Required npm packages:
 * - node-cron (for scheduling)
 * - dotenv (for environment variables)
 * - nodemailer (for email sending)
 *
 * This script performs daily intelligence gathering using Groq API (free alternative to OpenAI)
 * and generates categorized content briefs for LinkedIn/Twitter content creation.
 *
 * Stage 1: Broad-Spectrum Trend Discovery across 4 categories
 * Stage 2: Deep-dive content brief generation for each discovered topic
 *
 * Scheduled to run daily at 8:30 AM IST
 */

import cron from "node-cron";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

/**
 * Developer Intelligence Engine Class
 * Implements a two-stage AI analysis pipeline for developer content creation
 */
class DeveloperIntelligenceEngine {
  constructor() {
    // Validate required environment variables
    this.validateEnvironment();

    // Groq API configuration (FREE alternative to OpenAI)
    this.groqApiUrl = "https://api.groq.com/openai/v1/chat/completions";
    this.groqApiKey = process.env.GROQ_API_KEY;

    // Email configuration using existing Brevo SMTP
    this.emailConfig = {
      from: process.env.SENDER_EMAIL || "anventerprises11@gmail.com",
      to: process.env.RECIPIENT_EMAIL || "developer@example.com",
      cc: process.env.CC_EMAILS ? process.env.CC_EMAILS.split(",") : [],
    };

    // Initialize nodemailer transporter
    this.transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 2525,
      secure: false,
      auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
      },
    });

    // Market intelligence data storage
    this.marketIntelligence = {};
    this.contentBriefs = [];

    // Category mapping for organized reporting
    this.categoryMapping = {
      new_libraries_and_tools: {
        title: "🚀 New Libraries & Tools",
        icon: "🔧",
        color: "#007bff",
        description: "Emerging libraries and tools gaining developer attention",
      },
      emerging_technologies_and_concepts: {
        title: "💡 Emerging Technologies & Concepts",
        icon: "⚡",
        color: "#28a745",
        description: "New architectural patterns and technological concepts",
      },
      critical_issues_and_vulnerabilities: {
        title: "🛡️ Critical Issues & Vulnerabilities",
        icon: "⚠️",
        color: "#dc3545",
        description: "Security alerts and critical challenges to address",
      },
      notable_tech_talks_and_articles: {
        title: "📚 Notable Tech Talks & Articles",
        icon: "🎯",
        color: "#6f42c1",
        description: "Influential content shaping developer discussions",
      },
    };

    console.log("🤖 Developer Intelligence Engine initialized");
    console.log("📡 Using Groq AI (FREE) for intelligence gathering");
  }

  /**
   * Validate required environment variables
   */
  validateEnvironment() {
    const required = ["GROQ_API_KEY", "BREVO_USER", "BREVO_PASS"];
    const missing = required.filter((key) => !process.env[key]);

    if (missing.length > 0) {
      console.error(
        "❌ Missing required environment variables:",
        missing.join(", ")
      );
      console.log(
        "💡 Please check your .env file and ensure all credentials are set"
      );
      process.exit(1);
    }
  }

  /**
   * STAGE 1: Broad-Spectrum Market Intelligence Gathering
   * Makes a single API call to gather comprehensive developer landscape data
   * @returns {Promise<Object>} Categorized market intelligence data
   */
  async getMarketIntelligence() {
    console.log("🔍 STAGE 1: Gathering broad-spectrum market intelligence...");

    const marketPrompt = `Analyze the current landscape for MERN stack and modern backend developers. Return a JSON object with the following four keys:
new_libraries_and_tools: A list of 2-3 emerging or rapidly updating libraries, frameworks, or developer tools that are generating buzz.
emerging_technologies_and_concepts: A list of 2-3 broader concepts, architectural patterns, or new technologies (like new API standards or database types) being discussed.
critical_issues_and_vulnerabilities: A list of 1-2 recent, significant security vulnerabilities, common bugs, or pressing challenges affecting Node.js, Express, or related backend technologies.
notable_tech_talks_and_articles: A list of 1-2 highly-regarded, recent tech talks, conference keynotes, or influential blog posts that have captured the developer community's attention.
For each list, provide a simple array of strings. Do not add any text outside of the raw JSON object.`;

    try {
      const response = await fetch(this.groqApiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.groqApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192", // Fast and reliable Groq model
          messages: [
            {
              role: "system",
              content:
                "You are a senior Principal Engineer and Developer Advocate with deep expertise in the MERN stack, backend development, and the broader developer ecosystem. You stay current with the latest developments, security issues, and community discussions. Always respond with valid JSON format only.",
            },
            {
              role: "user",
              content: marketPrompt,
            },
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Groq API error: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();
      const rawResponse = data.choices[0].message.content.trim();

      console.log("📡 Raw market intelligence response received");

      // Parse JSON response with robust error handling
      let intelligence;
      try {
        // Extract JSON from response (handle potential markdown formatting)
        const jsonMatch = rawResponse.match(/\{[\s\S]*\}/);
        const jsonString = jsonMatch ? jsonMatch[0] : rawResponse;
        intelligence = JSON.parse(jsonString);
      } catch (parseError) {
        console.warn(
          "⚠️ JSON parsing failed, using fallback intelligence data"
        );
        intelligence = this.getFallbackIntelligence();
      }

      // Validate and sanitize intelligence data
      intelligence = this.validateIntelligenceStructure(intelligence);

      this.marketIntelligence = intelligence;

      const totalTopics = Object.values(intelligence).reduce(
        (sum, arr) => sum + arr.length,
        0
      );
      console.log(
        `✅ Market intelligence gathered: ${totalTopics} topics across ${Object.keys(intelligence).length} categories`
      );

      return intelligence;
    } catch (error) {
      console.error("❌ Market intelligence gathering failed:", error.message);
      console.log("🔄 Using fallback intelligence data");

      const fallbackData = this.getFallbackIntelligence();
      this.marketIntelligence = fallbackData;
      return fallbackData;
    }
  }

  /**
   * Validate and ensure proper structure of intelligence data
   * @param {Object} intelligence - Raw intelligence data
   * @returns {Object} Validated intelligence structure
   */
  validateIntelligenceStructure(intelligence) {
    const requiredKeys = [
      "new_libraries_and_tools",
      "emerging_technologies_and_concepts",
      "critical_issues_and_vulnerabilities",
      "notable_tech_talks_and_articles",
    ];

    const validated = {};

    requiredKeys.forEach((key) => {
      if (intelligence[key] && Array.isArray(intelligence[key])) {
        validated[key] = intelligence[key];
      } else {
        validated[key] = [];
        console.warn(`⚠️ Invalid or missing category: ${key}`);
      }
    });

    return validated;
  }

  /**
   * Fallback intelligence data for system resilience
   * @returns {Object} Fallback market intelligence
   */
  getFallbackIntelligence() {
    return {
      new_libraries_and_tools: [
        "Bun.js 1.0 - Ultra-fast JavaScript runtime",
        "Hono.js - Lightweight web framework for edge",
        "Effect-TS - Functional programming for TypeScript",
      ],
      emerging_technologies_and_concepts: [
        "Edge Computing with Vercel Functions",
        "Server Components in Next.js 14",
        "WebAssembly for backend optimization",
      ],
      critical_issues_and_vulnerabilities: [
        "Node.js CVE-2024-22025 HTTP/2 vulnerability",
        "Express.js path traversal security concerns",
      ],
      notable_tech_talks_and_articles: [
        "State of JS 2024 Survey Results",
        "React Conf 2024 - Future of Server Components",
      ],
    };
  }

  /**
   * STAGE 2: Generate detailed content brief for a specific topic
   * @param {string} topic - The topic to analyze
   * @param {string} category - The category this topic belongs to
   * @returns {Promise<Object>} Detailed content brief
   */
  async generateContentBriefForTopic(topic, category) {
    console.log(`📝 Generating content brief for: ${topic}`);

    const briefPrompt = `For the topic '${topic}', generate a content brief for a professional LinkedIn post. The brief should include these four sections:
**1. Compelling Hook:** An engaging question or a bold statement to grab attention.
**2. Context & Relevance:** A short explanation of what it is and *why* it's important for MERN/backend developers *right now*.
**3. Key Takeaways:** 3-4 bullet points highlighting the most critical information, key features, or learning points.
**4. Call to Discussion:** A concluding thought or a direct question for the audience to spark conversation and comments.

Format your response exactly like this:

HOOK: [your compelling hook here]

CONTEXT: [your context & relevance explanation here]

TAKEAWAYS:
• [takeaway 1]
• [takeaway 2]
• [takeaway 3]
• [takeaway 4]

DISCUSSION: [your call to discussion here]`;

    try {
      const response = await fetch(this.groqApiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.groqApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content:
                "You are a senior Principal Engineer and Developer Advocate who excels at creating engaging, professional LinkedIn content that drives discussion and engagement among developers and tech professionals. Focus on practical insights and actionable takeaways.",
            },
            {
              role: "user",
              content: briefPrompt,
            },
          ],
          max_tokens: 600,
          temperature: 0.8,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Groq API error: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();
      const rawBrief = data.choices[0].message.content.trim();

      // Parse the structured response
      const parsedBrief = this.parseContentBrief(rawBrief);

      const contentBrief = {
        topic: topic,
        category: category,
        hook: parsedBrief.hook || `🚀 ${topic} is reshaping modern development`,
        context:
          parsedBrief.context ||
          `${topic} represents a significant advancement in the developer ecosystem.`,
        takeaways: parsedBrief.takeaways || [
          `Revolutionary approach to development`,
          `Enhanced developer experience`,
          `Production-ready solution`,
        ],
        discussion:
          parsedBrief.discussion ||
          `What are your thoughts on ${topic}? Share your experience!`,
        generatedAt: new Date().toISOString(),
        success: true,
        rawResponse: rawBrief,
      };

      console.log(`✅ Content brief generated for: ${topic}`);
      return contentBrief;
    } catch (error) {
      console.error(
        `❌ Content brief generation failed for ${topic}:`,
        error.message
      );

      // Return fallback content brief
      return {
        topic: topic,
        category: category,
        hook: `🔥 ${topic} is transforming the development landscape`,
        context: `${topic} addresses critical challenges in modern MERN/backend development, offering innovative solutions that enhance developer productivity and application performance.`,
        takeaways: [
          "Innovative approach to common development challenges",
          "Enhanced developer experience and productivity",
          "Strong community adoption and industry backing",
          "Production-ready with enterprise-grade features",
        ],
        discussion: `Have you explored ${topic} in your projects? What has been your experience? Share your insights!`,
        generatedAt: new Date().toISOString(),
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * Parse structured content brief response from AI
   * @param {string} response - Raw AI response
   * @returns {Object} Parsed content sections
   */
  parseContentBrief(response) {
    const sections = {
      hook: "",
      context: "",
      takeaways: [],
      discussion: "",
    };

    try {
      // Extract HOOK
      const hookMatch = response.match(/HOOK:\s*(.*?)(?=\n\n|\nCONTEXT:|\n$)/s);
      sections.hook = hookMatch ? hookMatch[1].trim() : "";

      // Extract CONTEXT
      const contextMatch = response.match(
        /CONTEXT:\s*(.*?)(?=\n\n|\nTAKEAWAYS:|\n$)/s
      );
      sections.context = contextMatch ? contextMatch[1].trim() : "";

      // Extract TAKEAWAYS
      const takeawaysMatch = response.match(
        /TAKEAWAYS:\s*(.*?)(?=\n\n|\nDISCUSSION:|\n$)/s
      );
      if (takeawaysMatch) {
        const takeawaysText = takeawaysMatch[1].trim();
        sections.takeaways = takeawaysText
          .split("\n")
          .map((line) => line.replace(/^[•\-\*]\s*/, "").trim())
          .filter((line) => line.length > 0);
      }

      // Extract DISCUSSION
      const discussionMatch = response.match(/DISCUSSION:\s*(.*?)$/s);
      sections.discussion = discussionMatch ? discussionMatch[1].trim() : "";
    } catch (error) {
      console.warn("⚠️ Error parsing content brief response:", error.message);
    }

    return sections;
  }

  /**
   * Generate categorized HTML report from all content briefs
   * @param {Array} contentBriefs - Array of content brief objects
   * @returns {string} HTML email report
   */
  generateCategorizedHTMLReport(contentBriefs) {
    const currentDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Group content briefs by category
    const categorizedBriefs = {};
    contentBriefs.forEach((brief) => {
      if (!categorizedBriefs[brief.category]) {
        categorizedBriefs[brief.category] = [];
      }
      categorizedBriefs[brief.category].push(brief);
    });

    // Generate HTML sections for each category
    let categorySections = "";
    let totalTopics = 0;

    Object.keys(this.categoryMapping).forEach((categoryKey) => {
      const briefs = categorizedBriefs[categoryKey];
      if (!briefs || briefs.length === 0) return;

      const categoryInfo = this.categoryMapping[categoryKey];
      totalTopics += briefs.length;

      const categorySection = `
        <div style="margin-bottom: 50px;">
          <div style="background: linear-gradient(135deg, ${categoryInfo.color} 0%, ${categoryInfo.color}CC 100%); color: white; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
            <h2 style="margin: 0; font-size: 26px; font-weight: 700;">
              ${categoryInfo.icon} ${categoryInfo.title}
            </h2>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 15px;">
              ${categoryInfo.description}
            </p>
          </div>
          
          ${briefs
            .map(
              (brief) => `
            <div style="margin-bottom: 35px; padding: 30px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-left: 6px solid ${categoryInfo.color}; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
              <h3 style="color: ${categoryInfo.color}; margin: 0 0 20px 0; font-size: 22px; font-weight: 600;">
                ${categoryInfo.icon} ${brief.topic}
              </h3>
              
              <div style="margin-bottom: 20px;">
                <h4 style="color: #dc3545; margin: 0 0 10px 0; font-size: 15px; font-weight: 600; text-transform: uppercase;">
                  🎯 Compelling Hook
                </h4>
                <p style="color: #495057; line-height: 1.6; font-size: 16px; margin: 0; font-style: italic; padding: 12px; background: rgba(220, 53, 69, 0.1); border-radius: 8px;">
                  "${brief.hook}"
                </p>
              </div>

              <div style="margin-bottom: 20px;">
                <h4 style="color: #28a745; margin: 0 0 10px 0; font-size: 15px; font-weight: 600; text-transform: uppercase;">
                  💡 Context & Relevance
                </h4>
                <p style="color: #495057; line-height: 1.7; font-size: 16px; margin: 0; padding: 15px; background: rgba(40, 167, 69, 0.1); border-radius: 8px;">
                  ${brief.context}
                </p>
              </div>

              <div style="margin-bottom: 20px;">
                <h4 style="color: #ffc107; margin: 0 0 10px 0; font-size: 15px; font-weight: 600; text-transform: uppercase;">
                  ⭐ Key Takeaways
                </h4>
                <ul style="color: #495057; line-height: 1.6; font-size: 16px; margin: 0; padding: 15px; background: rgba(255, 193, 7, 0.1); border-radius: 8px; list-style: none;">
                  ${brief.takeaways
                    .map(
                      (takeaway) => `
                    <li style="margin-bottom: 8px; padding-left: 25px; position: relative;">
                      <span style="position: absolute; left: 0; color: #ffc107; font-weight: bold; font-size: 18px;">✓</span>
                      ${takeaway}
                    </li>
                  `
                    )
                    .join("")}
                </ul>
              </div>

              <div style="margin-bottom: 15px;">
                <h4 style="color: #6f42c1; margin: 0 0 10px 0; font-size: 15px; font-weight: 600; text-transform: uppercase;">
                  🗣️ Call to Discussion
                </h4>
                <p style="color: #495057; line-height: 1.6; font-size: 16px; margin: 0; font-style: italic; padding: 12px; background: rgba(111, 66, 193, 0.1); border-radius: 8px;">
                  ${brief.discussion}
                </p>
              </div>

              <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d; text-align: right;">
                Generated: ${new Date(brief.generatedAt).toLocaleString()} | ${brief.success ? "AI Generated" : "Fallback Content"} | Groq AI
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      `;

      categorySections += categorySection;
    });

    // Calculate success metrics
    const successfulBriefs = contentBriefs.filter(
      (brief) => brief.success
    ).length;
    const successRate =
      totalTopics > 0 ? Math.round((successfulBriefs / totalTopics) * 100) : 0;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developer Intelligence Report - ${currentDate}</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 1100px; 
            margin: 0 auto; 
            padding: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .header { 
            background: linear-gradient(135deg, #007bff 0%, #0056b3 100%); 
            color: white; 
            padding: 45px 35px; 
            text-align: center; 
        }
        .content {
            padding: 35px;
        }
        .powered-by {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
            padding: 18px;
            text-align: center;
            font-size: 15px;
            font-weight: 600;
        }
        .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 36px; font-weight: 700;">🧠 Developer Intelligence Report</h1>
            <p style="margin: 18px 0 8px 0; opacity: 0.9; font-size: 20px;">${currentDate}</p>
            <p style="margin: 8px 0 0 0; opacity: 0.8; font-size: 17px;">MERN Stack & Backend Development Intelligence</p>
        </div>

        <div class="powered-by">
            <p style="margin: 0;">🤖 Powered by Groq AI | Two-Stage Developer Intelligence Pipeline</p>
        </div>

        <div class="content">
            <div style="margin-bottom: 35px; padding: 25px; background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); border-radius: 12px;">
                <h2 style="color: #1565c0; margin: 0 0 18px 0; font-size: 22px;">📊 Intelligence Overview</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 15px;">
                    <div style="text-align: center; padding: 15px; background: rgba(255,255,255,0.7); border-radius: 8px;">
                        <div style="font-size: 24px; font-weight: bold; color: #1565c0;">${totalTopics}</div>
                        <div style="font-size: 14px; color: #1976d2;">Topics Analyzed</div>
                    </div>
                    <div style="text-align: center; padding: 15px; background: rgba(255,255,255,0.7); border-radius: 8px;">
                        <div style="font-size: 24px; font-weight: bold; color: #1565c0;">${Object.keys(categorizedBriefs).length}</div>
                        <div style="font-size: 14px; color: #1976d2;">Categories Covered</div>
                    </div>
                    <div style="text-align: center; padding: 15px; background: rgba(255,255,255,0.7); border-radius: 8px;">
                        <div style="font-size: 24px; font-weight: bold; color: #1565c0;">${successRate}%</div>
                        <div style="font-size: 14px; color: #1976d2;">Success Rate</div>
                    </div>
                </div>
                <p style="color: #1976d2; margin: 0; font-size: 16px; line-height: 1.6;">
                    This comprehensive intelligence report analyzes the latest developments across the MERN & backend ecosystem. 
                    Each topic includes strategic insights for LinkedIn content creation and community engagement.
                </p>
            </div>

            ${categorySections}
        </div>

        <div class="footer">
            <p style="margin: 0 0 12px 0;"><strong>ANV Enterprise</strong> - Developer Intelligence Engine</p>
            <p style="margin: 0 0 12px 0;">Generated automatically via two-stage AI analysis pipeline at ${new Date().toLocaleString()}</p>
            <p style="margin: 0;">Powered by Groq AI - Free, Fast & Reliable LLM Infrastructure</p>
        </div>
    </div>
</body>
</html>
    `.trim();
  }

  /**
   * Send email report using Nodemailer
   * @param {string} htmlReport - HTML content for email
   * @returns {Promise<Object>} Email sending result
   */
  async sendIntelligenceReport(htmlReport) {
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    try {
      const mailOptions = {
        from: this.emailConfig.from,
        to: this.emailConfig.to,
        cc: this.emailConfig.cc.length > 0 ? this.emailConfig.cc : undefined,
        subject: `Your Developer Intelligence Report for ${currentDate}`,
        html: htmlReport,
        text: `Developer Intelligence Report for ${currentDate}\n\nThis email contains comprehensive analysis of the latest MERN stack and backend development trends, security issues, and notable content.\n\nPlease view this email in HTML format for the best experience.\n\nPowered by Groq AI - Developer Intelligence Engine`,
      };

      console.log("📧 Sending Developer Intelligence Report...");
      const info = await this.transporter.sendMail(mailOptions);

      console.log(
        `✅ Intelligence report sent successfully! Message ID: ${info.messageId}`
      );

      return {
        success: true,
        messageId: info.messageId,
        recipients: {
          to: this.emailConfig.to,
          cc: this.emailConfig.cc,
        },
      };
    } catch (error) {
      console.error("❌ Email sending failed:", error.message);

      return {
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * MAIN PIPELINE: Execute the complete two-stage intelligence gathering process
   * @returns {Promise<Object>} Pipeline execution result
   */
  async runDailyPipeline() {
    const startTime = Date.now();

    try {
      console.log("🚀 Starting Developer Intelligence Pipeline");
      console.log(
        "📅 Two-stage analysis: Market Intelligence → Content Brief Generation"
      );

      // STAGE 1: Gather market intelligence across all categories
      const intelligence = await this.getMarketIntelligence();

      if (!intelligence || Object.keys(intelligence).length === 0) {
        throw new Error("No market intelligence data received in Stage 1");
      }

      // Flatten all topics from all categories for Stage 2 processing
      const allTopics = [];
      Object.entries(intelligence).forEach(([category, topics]) => {
        topics.forEach((topic) => {
          allTopics.push({ topic, category });
        });
      });

      if (allTopics.length === 0) {
        throw new Error("No topics discovered for content brief generation");
      }

      console.log(
        `📝 STAGE 2: Generating content briefs for ${allTopics.length} topics...`
      );

      // STAGE 2: Generate content briefs for all discovered topics
      // Use Promise.allSettled for resilient parallel processing
      const briefPromises = allTopics.map(({ topic, category }) =>
        this.generateContentBriefForTopic(topic, category)
      );

      const briefResults = await Promise.allSettled(briefPromises);

      // Extract successful results and handle failures gracefully
      this.contentBriefs = briefResults.map((result) => {
        if (result.status === "fulfilled") {
          return result.value;
        } else {
          console.error("Content brief generation failed:", result.reason);
          return {
            topic: "Unknown Topic",
            category: "unknown",
            hook: "Content generation failed due to system error",
            context:
              "Technical issue encountered during content brief generation",
            takeaways: ["System error occurred", "Please retry the operation"],
            discussion: "Please try again later or contact support",
            success: false,
            error: result.reason,
            generatedAt: new Date().toISOString(),
          };
        }
      });

      // Generate comprehensive HTML report
      console.log("📊 Compiling categorized intelligence report...");
      const htmlReport = this.generateCategorizedHTMLReport(this.contentBriefs);

      // Send email report
      const emailResult = await this.sendIntelligenceReport(htmlReport);

      const executionTime = ((Date.now() - startTime) / 1000).toFixed(2);

      // Calculate metrics
      const successfulBriefs = this.contentBriefs.filter(
        (brief) => brief.success
      ).length;
      const totalCategories = Object.keys(intelligence).length;

      if (emailResult.success) {
        console.log(
          `🎉 Developer Intelligence Pipeline completed successfully in ${executionTime}s`
        );

        return {
          success: true,
          executionTime: `${executionTime}s`,
          stage1: {
            categoriesAnalyzed: totalCategories,
            topicsDiscovered: allTopics.length,
            intelligence: intelligence,
          },
          stage2: {
            contentBriefsGenerated: this.contentBriefs.length,
            successfulBriefs: successfulBriefs,
            failedBriefs: this.contentBriefs.length - successfulBriefs,
          },
          emailSent: true,
          messageId: emailResult.messageId,
          aiProvider: "Groq (FREE)",
        };
      } else {
        console.log(
          `⚠️ Email sending failed, but intelligence generation completed in ${executionTime}s`
        );

        return {
          success: false,
          executionTime: `${executionTime}s`,
          stage1: {
            categoriesAnalyzed: totalCategories,
            topicsDiscovered: allTopics.length,
            intelligence: intelligence,
          },
          stage2: {
            contentBriefsGenerated: this.contentBriefs.length,
            successfulBriefs: successfulBriefs,
            failedBriefs: this.contentBriefs.length - successfulBriefs,
          },
          emailSent: false,
          error: emailResult.error,
          aiProvider: "Groq (FREE)",
        };
      }
    } catch (error) {
      const executionTime = ((Date.now() - startTime) / 1000).toFixed(2);
      console.error(
        `💥 Critical failure in intelligence pipeline: ${error.message}`
      );

      return {
        success: false,
        executionTime: `${executionTime}s`,
        error: error.message,
        aiProvider: "Groq (FREE)",
      };
    }
  }

  /**
   * Schedule the daily intelligence pipeline using node-cron
   * Default: every day at 6:30 AM IST
   */
  scheduleDaily() {
    const enabled = (process.env.INTEL_ENABLE_SCHEDULER ?? 'true').toLowerCase() !== 'false';
    if (!enabled) {
      console.log('⏸️  Intelligence scheduler disabled via INTEL_ENABLE_SCHEDULER=false');
      return;
    }

    // Prevent duplicate scheduling in the same process
    if (globalThis.__INTEL_SCHED_ACTIVE) {
      console.log('ℹ️  Intelligence scheduler already active in this process');
      return;
    }

    const cronSpec = process.env.INTEL_CRON || "30 6 * * *"; // 06:30 daily
    const timezone = process.env.INTEL_TZ || "Asia/Kolkata";

    console.log(`🕐 Scheduling Developer Intelligence Pipeline: '${cronSpec}' (${timezone})`);

    const job = cron.schedule(
      cronSpec,
      async () => {
        console.log("⏰ Daily intelligence pipeline triggered by cron scheduler");
        await this.runDailyPipeline();
      },
      { scheduled: true, timezone }
    );

    globalThis.__INTEL_SCHED_ACTIVE = true;
    globalThis.__INTEL_SCHED_JOB = job;

    console.log("✅ Daily scheduler activated - Developer Intelligence Engine ready");
    console.log(`📡 Next execution per cron '${cronSpec}' in TZ ${timezone}`);
  }

  /**
   * Manual trigger for testing and immediate execution
   * @returns {Promise<Object>} Pipeline execution result
   */
  async runNow() {
    console.log(
      "🧪 Manual trigger initiated - Running Developer Intelligence Pipeline"
    );
    return await this.runDailyPipeline();
  }

  /**
   * Get current engine status and configuration
   * @returns {Object} Current status information
   */
  getStatus() {
    return {
      initialized: true,
      marketIntelligence: this.marketIntelligence,
      contentBriefsCount: this.contentBriefs.length,
      emailConfig: {
        from: this.emailConfig.from,
        to: this.emailConfig.to,
        ccCount: this.emailConfig.cc.length,
      },
  schedule: process.env.INTEL_CRON || "30 6 * * *",
  timezone: process.env.INTEL_TZ || "Asia/Kolkata",
      aiProvider: "Groq (FREE)",
      categories: Object.keys(this.categoryMapping),
      pipeline: [
        "Market Intelligence Gathering",
        "Content Brief Generation",
        "Categorized Report Compilation",
        "Email Distribution",
      ],
    };
  }
}

// Initialize and start the Developer Intelligence Engine
const intelligenceEngine = new DeveloperIntelligenceEngine();

// Schedule daily execution
intelligenceEngine.scheduleDaily();

// Export for manual testing and integration
export default intelligenceEngine;
