import { ImageResponse } from "@vercel/og";
import { adTemplates } from "@/lib/templates";
import { NextRequest } from "next/server";
import type { CSSProperties } from "react";

export const runtime = "edge";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const searchParams = request.nextUrl.searchParams;

    // Get parameters from URL
    const copy = searchParams.get("copy") || "Your compelling ad copy here";
    const templateId = searchParams.get("templateId") || "simple-banner";
    const backgroundColor = searchParams.get("bg") || undefined;
    const textColor = searchParams.get("color") || undefined;

    // Find the template by ID
    const template =
      adTemplates.find((t) => t.id === templateId) || adTemplates[0];

    // Create styles based on template type
    const containerStyle: CSSProperties = {
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
      position: "relative",
      backgroundColor:
        backgroundColor ||
        (templateId === "minimal"
          ? "#ffffff"
          : templateId === "dark-mode"
          ? "#111111"
          : templateId === "vibrant"
          ? "#FF5722"
          : templateId === "elegant"
          ? "#EAEAEA"
          : "#3b82f6"),
      overflow: "hidden",
    };

    if (templateId === "gradient") {
      containerStyle.background =
        backgroundColor || "linear-gradient(135deg, #667eea, #764ba2)";
      containerStyle.backgroundImage =
        "radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 20%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.07) 0%, transparent 30%)";
    } else if (templateId === "minimal") {
      containerStyle.backgroundImage =
        "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)";
      containerStyle.backgroundSize = "20px 20px";
    } else if (templateId === "dark-mode") {
      containerStyle.backgroundImage =
        "radial-gradient(circle at 20% 20%, #333333 0%, transparent 8%), radial-gradient(circle at 80% 80%, #333333 0%, transparent 8%)";
    } else if (templateId === "vibrant") {
      containerStyle.padding = "0";
    } else if (templateId === "elegant") {
      containerStyle.backgroundColor = "#EAEAEA";
    }

    // Create content style for different templates
    const getContentStyle = (): CSSProperties => {
      const baseStyle: CSSProperties = {
        fontFamily:
          templateId === "minimal"
            ? "Inter, sans-serif"
            : templateId === "elegant"
            ? "Georgia, serif"
            : templateId === "vibrant"
            ? "system-ui, sans-serif"
            : "Arial, sans-serif",
        color:
          textColor ||
          (templateId === "minimal" || templateId === "elegant"
            ? "#111111"
            : "#ffffff"),
        fontSize:
          templateId === "dark-mode"
            ? "70px"
            : templateId === "elegant"
            ? "58px"
            : templateId === "vibrant"
            ? "62px"
            : "64px",
        fontWeight:
          templateId === "elegant"
            ? 400
            : templateId === "vibrant"
            ? 800
            : "bold",
        textAlign: "center" as const,
        lineHeight: 1.2,
        maxWidth: "80%",
        zIndex: 1,
      };

      if (templateId === "simple-banner") {
        return {
          ...baseStyle,
          padding: "20px",
          borderLeft: "8px solid rgba(255, 255, 255, 0.4)",
        };
      } else if (templateId === "gradient") {
        return {
          ...baseStyle,
          padding: "40px",
          borderRadius: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(5px)",
        };
      } else if (templateId === "minimal") {
        return {
          ...baseStyle,
          padding: "40px",
          backgroundColor: "rgba(255,255,255,0.5)",
          backdropFilter: "blur(3px)",
          borderRadius: "4px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          letterSpacing: "-1px",
        };
      } else if (templateId === "dark-mode") {
        return {
          ...baseStyle,
          padding: "30px",
          textShadow: "0 5px 20px rgba(0,0,0,0.5)",
          background: "rgba(0,0,0,0.3)",
          borderRadius: "8px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          backdropFilter: "blur(5px)",
        };
      } else if (templateId === "vibrant") {
        return {
          ...baseStyle,
          letterSpacing: "-0.5px",
          textShadow: "0 2px 10px rgba(0,0,0,0.2)",
          padding: "40px",
        };
      } else if (templateId === "elegant") {
        return {
          ...baseStyle,
          lineHeight: 1.3,
          marginBottom: "30px",
        };
      }

      return baseStyle;
    };

    // Create the OG image using React components
    return new ImageResponse(
      (
        <div style={containerStyle}>
          {/* Additional background elements for specific templates */}
          {templateId === "simple-banner" && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "-100px",
                  right: "-100px",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-50px",
                  left: "-50px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              />
            </>
          )}

          {templateId === "gradient" && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "0",
                  width: "100px",
                  height: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  right: "0",
                  width: "100px",
                  height: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                }}
              />
            </>
          )}

          {templateId === "minimal" && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "40px",
                  width: "80px",
                  height: "80px",
                  borderTop: "4px solid rgba(0,0,0,0.2)",
                  borderLeft: "4px solid rgba(0,0,0,0.2)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  right: "40px",
                  width: "80px",
                  height: "80px",
                  borderBottom: "4px solid rgba(0,0,0,0.2)",
                  borderRight: "4px solid rgba(0,0,0,0.2)",
                }}
              />
            </>
          )}

          {templateId === "dark-mode" && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, rgba(50,50,50,0.1) 0%, transparent 100%)",
                  zIndex: "0",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  right: "20px",
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)",
                }}
              />
            </>
          )}

          {templateId === "vibrant" && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "35%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.15)",
                  clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 0, transparent 50%)",
                  backgroundSize: "10px 10px",
                  mixBlendMode: "overlay",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50px",
                  right: "50px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "80px",
                  left: "100px",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                }}
              />
            </>
          )}

          {templateId === "elegant" && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  right: "20px",
                  bottom: "20px",
                  border: "1px solid rgba(0,0,0,0.1)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: "40px",
                  width: "30px",
                  height: "30px",
                  borderTop: "2px solid rgba(0,0,0,0.2)",
                  borderLeft: "2px solid rgba(0,0,0,0.2)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  right: "40px",
                  width: "30px",
                  height: "30px",
                  borderTop: "2px solid rgba(0,0,0,0.2)",
                  borderRight: "2px solid rgba(0,0,0,0.2)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "40px",
                  width: "30px",
                  height: "30px",
                  borderBottom: "2px solid rgba(0,0,0,0.2)",
                  borderLeft: "2px solid rgba(0,0,0,0.2)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  right: "40px",
                  width: "30px",
                  height: "30px",
                  borderBottom: "2px solid rgba(0,0,0,0.2)",
                  borderRight: "2px solid rgba(0,0,0,0.2)",
                }}
              />
            </>
          )}

          {/* Main content for different templates */}
          {templateId === "elegant" ? (
            <div style={{ maxWidth: "80%", textAlign: "center" as const }}>
              <div
                style={{
                  margin: "0 auto 30px",
                  width: "80px",
                  height: "3px",
                  backgroundColor: "rgba(0,0,0,0.2)",
                }}
              />
              <div style={getContentStyle()}>{copy}</div>
              <div
                style={{
                  margin: "30px auto 0",
                  width: "80px",
                  height: "3px",
                  backgroundColor: "rgba(0,0,0,0.2)",
                }}
              />
            </div>
          ) : templateId === "vibrant" ? (
            <div
              style={{
                maxWidth: "70%",
                zIndex: 2,
                padding: "40px",
                background: "rgba(0,0,0,0.2)",
                borderRadius: "12px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                backdropFilter: "blur(10px)",
                borderLeft: "6px solid rgba(255,255,255,0.5)",
              }}
            >
              <div style={getContentStyle()}>{copy}</div>
            </div>
          ) : (
            <div style={getContentStyle()}>{copy}</div>
          )}

          {/* Branding elements for different templates */}
          {templateId === "vibrant" ? (
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                right: "40px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "white",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: backgroundColor || "#FF5722",
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: "system-ui, sans-serif",
                  color: textColor || "#ffffff",
                  fontSize: "24px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                }}
              >
                yourbrand
              </div>
            </div>
          ) : templateId === "elegant" ? (
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                width: "100%",
                textAlign: "center" as const,
                fontFamily: "Georgia, serif",
                color: textColor || "#1A1A1A",
                fontSize: "20px",
                opacity: 0.7,
                fontStyle: "italic",
                letterSpacing: "1px",
              }}
            >
              yourelegantbrand.com
            </div>
          ) : templateId === "dark-mode" ? (
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                left: 0,
                right: 0,
                textAlign: "center" as const,
                fontFamily: "Arial, sans-serif",
                color: textColor || "#ffffff",
                fontSize: "28px",
                opacity: 0.9,
                letterSpacing: "1px",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(to right, #3B82F6, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                }}
              >
                #YouBrand
              </span>
              <span style={{ opacity: 0.5, fontSize: "10px" }}>●</span>
              <span style={{ opacity: 0.5, fontSize: "20px" }}>FOLLOW US</span>
            </div>
          ) : templateId === "minimal" ? (
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                fontFamily: "Inter, sans-serif",
                color: textColor || "#111111",
                fontSize: "24px",
                fontWeight: 500,
                opacity: 0.6,
                letterSpacing: "1px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  paddingTop: "15px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: textColor || "#111111",
                    marginRight: "15px",
                  }}
                />
                yourbrand.com
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: textColor || "#111111",
                    marginLeft: "15px",
                  }}
                />
              </div>
            </div>
          ) : (
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                right: templateId === "dark-mode" ? undefined : "30px",
                left: templateId === "dark-mode" ? 0 : undefined,
                width: templateId === "dark-mode" ? "100%" : undefined,
                textAlign:
                  templateId === "dark-mode" ? ("center" as const) : undefined,
                fontFamily: "Arial, sans-serif",
                color:
                  textColor ||
                  (templateId === "minimal" ? "#111111" : "#ffffff"),
                fontSize: "24px",
                opacity: 0.8,
                display: templateId === "simple-banner" ? "flex" : undefined,
                alignItems:
                  templateId === "simple-banner" ? "center" : undefined,
                gap: templateId === "simple-banner" ? "10px" : undefined,
                ...(templateId === "gradient"
                  ? {
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      padding: "10px 16px",
                      borderRadius: "30px",
                      display: "flex",
                      alignItems: "center",
                      backdropFilter: "blur(5px)",
                      zIndex: 2,
                    }
                  : {}),
              }}
            >
              {templateId === "simple-banner" && (
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: textColor || "#ffffff",
                    borderRadius: "50%",
                  }}
                />
              )}
              {templateId === "gradient" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: "8px" }}
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              )}
              yourbrand.com
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
