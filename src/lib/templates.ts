export interface TemplateProps {
  copy: string;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
}

// Enhanced Simple banner template with accent elements
export function simpleBannerTemplate({
  copy,
  backgroundColor = "#3b82f6",
  textColor = "#ffffff",
  fontFamily = "Arial, sans-serif",
}: TemplateProps): string {
  return `
    <div
      style="
        display: flex;
        width: 1200px;
        height: 630px;
        background-color: ${backgroundColor};
        align-items: center;
        justify-content: center;
        padding: 40px;
        position: relative;
        overflow: hidden;
      "
    >
      <!-- Decorative elements -->
      <div
        style="
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        "
      ></div>
      <div
        style="
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
        "
      ></div>
      <!-- Main content -->
      <div
        style="
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 64px;
          font-weight: bold;
          text-align: center;
          line-height: 1.2;
          max-width: 80%;
          padding: 20px;
          border-left: 8px solid rgba(255, 255, 255, 0.4);
          z-index: 1;
        "
      >${copy}</div>
      <!-- Brand watermark -->
      <div
        style="
          position: absolute;
          bottom: 30px;
          right: 30px;
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 28px;
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 10px;
        "
      >
        <div style="width: 20px; height: 20px; background-color: ${textColor}; border-radius: 50%;"></div>
        yourbrand.com
      </div>
    </div>
  `;
}

// Enhanced Gradient background template with geometric shapes
export function gradientTemplate({
  copy,
  backgroundColor = "linear-gradient(135deg, #667eea, #764ba2)",
  textColor = "#ffffff",
  fontFamily = "Arial, sans-serif",
}: TemplateProps): string {
  return `
    <div
      style="
        display: flex;
        width: 1200px;
        height: 630px;
        background: ${backgroundColor};
        align-items: center;
        justify-content: center;
        padding: 40px;
        position: relative;
        overflow: hidden;
      "
    >
      <!-- Geometric decorations -->
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 20%),
                            radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 20%),
                            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.07) 0%, transparent 30%);
        "
      ></div>
      <!-- Accent lines -->
      <div
        style="
          position: absolute;
          top: 40px;
          left: 0;
          width: 100px;
          height: 6px;
          background-color: rgba(255, 255, 255, 0.3);
        "
      ></div>
      <div
        style="
          position: absolute;
          bottom: 40px;
          right: 0;
          width: 100px;
          height: 6px;
          background-color: rgba(255, 255, 255, 0.3);
        "
      ></div>
      <!-- Main content -->
      <div
        style="
          position: relative;
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 60px;
          font-weight: bold;
          text-align: center;
          line-height: 1.3;
          max-width: 75%;
          padding: 50px;
          border-radius: 20px;
          background-color: rgba(0, 0, 0, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
          z-index: 1;
        "
      >${copy}</div>
      <!-- Brand watermark -->
      <div
        style="
          position: absolute;
          bottom: 30px;
          right: 30px;
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 24px;
          opacity: 0.9;
          background-color: rgba(0, 0, 0, 0.3);
          padding: 10px 16px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          backdrop-filter: blur(5px);
          z-index: 2;
        "
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
        </svg>
        yourbrand.com
      </div>
    </div>
  `;
}

// Enhanced Modern minimal template with subtle patterns
export function minimalTemplate({
  copy,
  backgroundColor = "#ffffff",
  textColor = "#111111",
  fontFamily = "Inter, sans-serif",
}: TemplateProps): string {
  return `
    <div
      style="
        display: flex;
        width: 1200px;
        height: 630px;
        background-color: ${backgroundColor};
        background-image: linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
        background-size: 20px 20px;
        align-items: center;
        justify-content: center;
        padding: 60px;
        position: relative;
      "
    >
      <!-- Corner accent -->
      <div
        style="
          position: absolute;
          top: 40px;
          left: 40px;
          width: 80px;
          height: 80px;
          border-top: 4px solid ${textColor};
          border-left: 4px solid ${textColor};
          opacity: 0.2;
        "
      ></div>
      <div
        style="
          position: absolute;
          bottom: 40px;
          right: 40px;
          width: 80px;
          height: 80px;
          border-bottom: 4px solid ${textColor};
          border-right: 4px solid ${textColor};
          opacity: 0.2;
        "
      ></div>
      <!-- Main content -->
      <div
        style="
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 68px;
          font-weight: 800;
          text-align: center;
          line-height: 1.1;
          max-width: 85%;
          letter-spacing: -1px;
          padding: 40px;
          background-color: rgba(255,255,255,0.5);
          backdrop-filter: blur(3px);
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        "
      >${copy}</div>
      <!-- Brand watermark -->
      <div
        style="
          position: absolute;
          bottom: 30px;
          width: 100%;
          display: flex;
          justify-content: center;
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 24px;
          font-weight: 500;
          opacity: 0.6;
          letter-spacing: 1px;
        "
      >
        <div style="display: flex; align-items: center; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 15px;">
          <div style="width: 8px; height: 8px; background-color: ${textColor}; margin-right: 15px;"></div>
          yourbrand.com
          <div style="width: 8px; height: 8px; background-color: ${textColor}; margin-left: 15px;"></div>
        </div>
      </div>
    </div>
  `;
}

// Enhanced Dark mode template with dynamic elements
export function darkModeTemplate({
  copy,
  backgroundColor = "#111111",
  textColor = "#ffffff",
  fontFamily = "system-ui, sans-serif",
}: TemplateProps): string {
  return `
    <div
      style="
        display: flex;
        flex-direction: column;
        width: 1200px;
        height: 630px;
        background-color: ${backgroundColor};
        background-image: radial-gradient(circle at 20% 20%, #333333 0%, transparent 8%),
                          radial-gradient(circle at 80% 80%, #333333 0%, transparent 8%);
        padding: 60px;
        position: relative;
        overflow: hidden;
      "
    >
      <!-- Dynamic design elements -->
      <div
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(50,50,50,0.1) 0%, transparent 100%);
          z-index: 0;
        "
      ></div>
      <div
        style="
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
        "
      ></div>
      <div
        style="
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
        "
      ></div>
      <!-- Main content -->
      <div
        style="
          margin: auto;
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 70px;
          font-weight: bold;
          text-align: center;
          line-height: 1.2;
          max-width: 90%;
          z-index: 1;
          text-shadow: 0 5px 20px rgba(0,0,0,0.5);
          padding: 30px;
          background: rgba(0,0,0,0.3);
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          backdrop-filter: blur(5px);
        "
      >${copy}</div>
      <!-- Modern hashtag branding -->
      <div
        style="
          position: absolute;
          bottom: 40px;
          left: 0;
          right: 0;
          text-align: center;
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 28px;
          opacity: 0.9;
          letter-spacing: 1px;
          z-index: 1;
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
        "
      >
        <span style="
          background: linear-gradient(to right, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        ">#YouBrand</span>
        <span style="opacity: 0.5; font-size: 10px;">●</span>
        <span style="opacity: 0.5; font-size: 20px;">FOLLOW US</span>
      </div>
    </div>
  `;
}

// Vibrant and modern template with color blocks
export function vibrantTemplate({
  copy,
  backgroundColor = "#FF5722",
  textColor = "#ffffff",
  fontFamily = "Montserrat, sans-serif",
}: TemplateProps): string {
  return `
    <div
      style="
        display: flex;
        width: 1200px;
        height: 630px;
        background-color: ${backgroundColor};
        align-items: center;
        justify-content: center;
        padding: 0;
        position: relative;
        overflow: hidden;
      "
    >
      <!-- Left color block -->
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 35%;
        height: 100%;
        background-color: rgba(0,0,0,0.15);
        clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
      "></div>
      
      <!-- Pattern overlay -->
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 0, transparent 50%);
        background-size: 10px 10px;
        mix-blend-mode: overlay;
      "></div>
      
      <!-- Floating circles -->
      <div style="
        position: absolute;
        top: 50px;
        right: 50px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: rgba(255,255,255,0.1);
      "></div>
      <div style="
        position: absolute;
        bottom: 80px;
        left: 100px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: rgba(255,255,255,0.1);
      "></div>
      
      <!-- Main content area -->
      <div style="
        max-width: 70%;
        z-index: 2;
        padding: 40px;
        background: rgba(0,0,0,0.2);
        border-radius: 12px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        backdrop-filter: blur(10px);
        border-left: 6px solid rgba(255,255,255,0.5);
      ">
        <div style="
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 62px;
          font-weight: 800;
          text-align: center;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        ">${copy}</div>
      </div>
      
      <!-- Brand logo -->
      <div style="
        position: absolute;
        bottom: 40px;
        right: 40px;
        display: flex;
        align-items: center;
        gap: 12px;
      ">
        <div style="
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            width: 20px;
            height: 20px;
            background-color: ${backgroundColor};
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          "></div>
        </div>
        <div style="
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 1px;
        ">yourbrand</div>
      </div>
    </div>
  `;
}

// Elegant and business-like template
export function elegantTemplate({
  copy,
  backgroundColor = "#EAEAEA",
  textColor = "#1A1A1A",
  fontFamily = "Georgia, serif",
}: TemplateProps): string {
  return `
    <div
      style="
        display: flex;
        width: 1200px;
        height: 630px;
        background-color: ${backgroundColor};
        align-items: center;
        justify-content: center;
        padding: 60px;
        position: relative;
      "
    >
      <!-- Border frame -->
      <div style="
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        bottom: 20px;
        border: 1px solid rgba(0,0,0,0.1);
        pointer-events: none;
      "></div>
      
      <!-- Corner ornaments -->
      <div style="
        position: absolute;
        top: 40px;
        left: 40px;
        width: 30px;
        height: 30px;
        border-top: 2px solid rgba(0,0,0,0.2);
        border-left: 2px solid rgba(0,0,0,0.2);
      "></div>
      <div style="
        position: absolute;
        top: 40px;
        right: 40px;
        width: 30px;
        height: 30px;
        border-top: 2px solid rgba(0,0,0,0.2);
        border-right: 2px solid rgba(0,0,0,0.2);
      "></div>
      <div style="
        position: absolute;
        bottom: 40px;
        left: 40px;
        width: 30px;
        height: 30px;
        border-bottom: 2px solid rgba(0,0,0,0.2);
        border-left: 2px solid rgba(0,0,0,0.2);
      "></div>
      <div style="
        position: absolute;
        bottom: 40px;
        right: 40px;
        width: 30px;
        height: 30px;
        border-bottom: 2px solid rgba(0,0,0,0.2);
        border-right: 2px solid rgba(0,0,0,0.2);
      "></div>
      
      <!-- Content wrapper -->
      <div style="
        max-width: 80%;
        text-align: center;
      ">
        <!-- Divider -->
        <div style="
          margin: 0 auto 30px;
          width: 80px;
          height: 3px;
          background-color: rgba(0,0,0,0.2);
        "></div>
        
        <!-- Main content -->
        <div style="
          font-family: ${fontFamily};
          color: ${textColor};
          font-size: 58px;
          font-weight: 400;
          text-align: center;
          line-height: 1.3;
          margin-bottom: 30px;
        ">${copy}</div>
        
        <!-- Divider -->
        <div style="
          margin: 30px auto 0;
          width: 80px;
          height: 3px;
          background-color: rgba(0,0,0,0.2);
        "></div>
      </div>
      
      <!-- Logo and branding -->
      <div style="
        position: absolute;
        bottom: 40px;
        width: 100%;
        text-align: center;
        font-family: ${fontFamily};
        color: ${textColor};
        font-size: 20px;
        opacity: 0.7;
        font-style: italic;
        letter-spacing: 1px;
      ">yourelegantbrand.com</div>
    </div>
  `;
}

// Get all available templates
export const adTemplates = [
  {
    id: "simple-banner",
    name: "Simple Banner",
    description:
      "A clean, bold banner with centered text and decorative circles",
    renderer: simpleBannerTemplate,
    category: "General",
  },
  {
    id: "gradient",
    name: "Gradient Background",
    description:
      "Modern gradient background with geometric patterns and glass effect",
    renderer: gradientTemplate,
    category: "Modern",
  },
  {
    id: "minimal",
    name: "Minimal",
    description:
      "Clean minimal design with subtle grid patterns and corner accents",
    renderer: minimalTemplate,
    category: "Minimal",
  },
  {
    id: "dark-mode",
    name: "Dark Mode",
    description:
      "Dark background with bold text, dynamic elements and modern branding",
    renderer: darkModeTemplate,
    category: "Dark",
  },
  {
    id: "vibrant",
    name: "Vibrant",
    description:
      "Bold and energetic design with geometric shapes and modern layout",
    renderer: vibrantTemplate,
    category: "Modern",
  },
  {
    id: "elegant",
    name: "Elegant",
    description:
      "Sophisticated design with classic typography and ornamental details",
    renderer: elegantTemplate,
    category: "Business",
  },
];
