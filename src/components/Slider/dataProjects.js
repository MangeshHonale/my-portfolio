export const PROJECTS = [
    {
        title: "Financial Service Cloud Implementation",
        description: "Designed and delivered an end-to-end case management solution for multiple banking products using Salesforce Financial Services Cloud. The system supported omnichannel case intake via email, chat, phone, and web forms, enabling seamless customer interactions."+
                    "\nIntegrated Salesforce with external banking systems to surface relevant account and product information in real time for Tier-1 representatives, reducing the need for manual data lookup. Built automated routing and escalation logic using Omni-Channel and queue-based workflows, ensuring complex cases were assigned to Tier-2 teams with full customer 360 visibility and decision access."+
                    "\nThe solution improved case handling efficiency, reduced manual escalations, and provided a centralized and compliant workflow for managing regulated banking requests.",
        techStack: "Finacial Service Cloud, LWC, Apex, Triggers, REST API"
    },
    
    {
        title: "Sales Forecasting Workflow Modernization",
        description: "Built an automated sales forecasting solution in Salesforce to replace a time-intensive, spreadsheet-based process for a major global pharmaceutical solutions provider. The platform enabled sales reps to forecast next-year revenue by adding products, leveraging dynamic pricing rules based on historic purchase patterns, and applying scoring logic that assigned weights to each forecasted product."+
"\nImplemented a configurable multi-stage approval framework where forecasts progressed through multiple leadership layers. Reviewers could approve, escalate, or reject with actionable feedback, ensuring compliance and data consistency. The final approved forecast allowed sales teams to identify and target high-priority customers aligned with strategic revenue objectives."+
"\nThis automation eliminated fragmented Excel workflows, reduced processing time by 40%, and improved forecasting accuracy by 30%, resulting in a scalable, auditable, and standardized forecasting process across regions.",
        techStack: "Sales cloud, LWC, Apex"
    },

    {
        title: "Modernizing Application Intake and Review with Multimedia Support",
        description: "Designed and developed a scalable, high-volume application intake and evaluation system using Salesforce Experience Cloud. The platform supported thousands of daily applications and offered a dynamic form experience where questions, response types, and conditional logic automatically adjusted based on program requirements."+
            "\nThe solution included multimedia resume uploads integrated with AWS S3, allowing applicants to attach videos, audio clips, and documents without impacting Salesforce storage limits. Reviewers could stream files directly in the browser, which reduced manual handling and shortened review workload by 20%, improving end-to-end processing efficiency and turnaround time.", 
        techStack: "Experience cloud, Aura Components, Apex, Triggers, AWS S3"
    },

    {
        title: "Automated DocuSign-Enabled Opportunity Contract Workflow",
        description: "Implemented an automated contract generation and signing workflow by integrating the Opportunity sales process in Salesforce with DocuSign using a middleware layer. Previously, sales teams manually uploaded DOCX templates to DocuSign, populated customer and product details from Salesforce, managed multi-level approvals, and finally attached the signed contract back to the Opportunity before closing it making the process slow, error-prone, and difficult to track."+
"\nTo streamline the workflow, I built a guided contract creation wizard in Salesforce that allows sales reps to select contract templates, customers, and relevant opportunities. The middleware consumed the selected template and automatically generated a final PDF populated with customer and product data, then sent it to DocuSign via API for internal approvals and customer signatures."+
"\nA webhook monitored contract status updates from DocuSign and synchronized them with Salesforce in real time. Once fully executed, the signed document was automatically attached to the Opportunity record and the deal stage updated to Closed Won. This automation reduced manual effort significantly and improved sales contract closure rates by 40%.", 
        techStack: "Sales cloud, Visualforce, Apex, Talend ESB, AWS EC2, DocuSign"
    }
];