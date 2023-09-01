import React from "react";

const GeneratedSignature = ({ formData }) => {
  const { name, department, section, phone, email, socialMedia } = formData;

  const copyHtmlToClipboard = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    document.body.appendChild(tempElement);
    const range = document.createRange();
    range.selectNode(tempElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    document.body.removeChild(tempElement);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        width: "400px",
        margin: "0 auto",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <img
          src="https://aitr.ac.in/wp-content/uploads/2023/03/White-Logos-for-Acropolis.png"
          alt={name}
          width="80%"
          height="80"
          style={{
            display: "block",
          }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        {/* Name and Designation */}
        <h3 style={{ marginBottom: "0" }}>{name}</h3>
        {department && section && (
          <p style={{ marginBottom: "0" }}>
            {department} - {section}
          </p>
        )}
      </div>
      <div style={{ marginBottom: "10px" }}>
        {phone && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            ☎️ <span style={{ marginLeft: "5px" }}>{phone}</span>
          </p>
        )}
        {email && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            ✉️ <span style={{ marginLeft: "5px" }}>{email}</span>
          </p>
        )}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <div style={{ textAlign: "center" }}>
          {socialMedia.facebook && (
            <span
              style={{
                margin: "0 5px",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              <a
                href={socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://w7.pngwing.com/pngs/561/460/png-transparent-fb-facebook-facebook-logo-social-media-icon.png"
                  alt="Facebook"
                  width="21"
                  height="21"
                />
              </a>
            </span>
          )}
          {socialMedia.linkedin && (
            <span
              style={{
                margin: "0 5px",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              <a
                href={socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  width="21"
                  height="21"
                />
              </a>
            </span>
          )}
          {socialMedia.twitter && (
            <span
              style={{
                margin: "0 5px",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              <a
                href={socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
                  alt="Twitter"
                  width="21"
                  height="21"
                />
              </a>
            </span>
          )}
          {socialMedia.instagram && (
            <span
              style={{
                margin: "0 5px",
                display: "inline-block",
                marginRight: "15px",
              }}
            >
              <a
                href={socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Instagram"
                  width="21"
                  height="21"
                />
              </a>
            </span>
          )}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => {
            const signatureHtml = `
              <div style="font-family: Arial, sans-serif; width: 400px;">
                <div style="margin-bottom: 1px;">
                  <img src="https://aitr.ac.in/wp-content/uploads/2023/03/White-Logos-for-Acropolis.png" alt="${name}" width="212" height="50" style="display: block; margin: 0 auto;" />
                </div>
                <div style="margin-bottom: 1px;">
                  <h3 style="margin-bottom: 0;">${name}</h3>
                  ${
                    department && section
                      ? `<p style="margin-bottom: 1px;">${department} - ${section}</p>`
                      : ""
                  }
                </div>
                <div style="margin-bottom: 2px;">
                  ${
                    phone
                      ? `<p style="margin-bottom: 0; display: flex; align-items: center;">☎️ <span style="margin-left: 5px;">${phone}</span></p>`
                      : ""
                  }
                  ${
                    email
                      ? `<p style="margin-bottom: 0; display: flex; align-items: center;">✉️ <span style="margin-left: 5px;">${email}</span></p>`
                      : ""
                  }
                </div>
                <div style="margin-bottom: 10px; display: flex; justify-content: space-around;">
                  ${
                    socialMedia.facebook
                      ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.facebook}" target="_blank" rel="noopener noreferrer"><img src="https://w7.pngwing.com/pngs/561/460/png-transparent-fb-facebook-facebook-logo-social-media-icon.png" alt="Facebook" width="21" height="21"/></a>&nbsp;&nbsp</span>`
                      : ""
                    }
                    ${
                      socialMedia.linkedin
                      ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.linkedin}" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="21" height="21"/></a>&nbsp;&nbsp</span>`
                      : ""
                    }
                    ${
                      socialMedia.twitter
                      ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.twitter}" target="_blank" rel="noopener noreferrer"><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="Twitter" width="21" height="21"/></a>&nbsp;&nbsp</span>`
                      : ""
                    }
                    ${
                    socialMedia.instagram
                      ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.instagram}" target="_blank" rel="noopener noreferrer"><img src="data:image/jpeg;base64,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" alt="Instagram" width="21" height="21"/> </a></span>`
                      : ""
                  }
                </div>
              </div>
            `;
            copyHtmlToClipboard(signatureHtml);
            alert("Email signature copied to clipboard!");
          }}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            fontSize: "18px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Copy Email Signature
        </button>
      </div>
    </div>
  );
};

export default GeneratedSignature;