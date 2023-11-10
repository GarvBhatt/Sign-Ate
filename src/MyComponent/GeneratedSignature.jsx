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
        {department && (
          <p style={{ marginBottom: "0" }}>
            {department} {section && `- ${section}`}
          </p>
        )}
      </div>
      <div style={{ marginBottom: "10px" }}>
        {phone && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            <span style={{fontSize:"21px"}}>☎</span>
            {/* <img
              src="data:image/png;base64,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"
              alt="Phone"
              width="19"
              height="19"
            /> */}
            {" "}
            <span style={{ marginLeft: "5px" }}>{phone}</span>
          </p>
        )}
        {email && (
          <p
            style={{ marginBottom: "0", display: "flex", alignItems: "center" }}
          >
            <span style={{fontSize:"22px"}}>✉</span>
            {/* <img
              src="https://cdn-icons-png.flaticon.com/512/386/386220.png"
              alt="Mail"
              width="19"
              height="19"
                /> */}
            <span style={{ marginLeft: "5px" }}>{email}</span>
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
                  src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"
                  alt="Facebook"
                  width="23"
                  height="23"
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
                  src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png"
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
                  src="data:image/png;base64,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"
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
                  src="https://cdn-icons-png.flaticon.com/512/3661/3661391.png"
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
                      ? `<p style="margin-bottom: 0; display: flex; align-items: center;">
                      <span style="margin-left: 5px;">${phone}</span></p>`
                      : ""
                  }
                  ${
                    email
                      ? `<p style="margin-bottom: 0; display: flex; align-items: center;">
                      <span style="margin-left: 5px;">${email}</span></p>`
                      : ""
                  }
                </div>
                <div style="margin-bottom: 10px; display: flex; justify-content: space-around;">
                  ${
                    socialMedia.facebook
                      ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.facebook}" target="_blank" rel="noopener noreferrer"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="Facebook" width="23" height="23"/></a>&nbsp;&nbsp</span>`
                      : ""
                  }
                    ${
                      socialMedia.linkedin
                        ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.linkedin}" target="_blank" rel="noopener noreferrer"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png" alt="LinkedIn" width="21" height="21"/></a>&nbsp;&nbsp</span>`
                        : ""
                    }
                    ${
                      socialMedia.twitter
                        ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.twitter}" target="_blank" rel="noopener noreferrer"><img src="data:image/png;base64,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" alt="Twitter" width="21" height="21"/></a>&nbsp;&nbsp</span>`
                        : ""
                    }
                    ${
                      socialMedia.instagram
                        ? `<span style="display: inline-block; margin-right:15px"><a href="${socialMedia.instagram}" target="_blank" rel="noopener noreferrer"><img src="https://cdn-icons-png.flaticon.com/512/3661/3661391.png" alt="Instagram" width="21" height="21"/> </a></span>`
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
