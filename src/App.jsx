import "./App.css";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import RefreshToken from "./RefreshToken";
import { useState } from "react";
function App() {
  const [accessToken, setAccessToken] = useState(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWU5NWZiOWItMDQ5NC00YTIwLTkyMjgtZGJhYzI5YjhjMzNkLyIsImlhdCI6MTYyOTkzNzY5OCwibmJmIjoxNjI5OTM3Njk4LCJleHAiOjE2Mjk5NDE1OTgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMlpnWU5DWE5CVFI3ZjkxMUlidHZaTyt3WjRLbjJWMml0RmEzTjlGdGw1a2IyRCsrREg1YVU3STZsT2xTdm9SM0JLRjNCTjRBUT09IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiQWtwYWthIiwiZ2l2ZW5fbmFtZSI6IkNoaWJ1aWtlbSIsImlwYWRkciI6IjE5Ny4yNTMuNTQuNjYiLCJuYW1lIjoiQ2hpYnVpa2VtICBBa3Bha2EiLCJvaWQiOiI0MjJiMjlhZi04NjRmLTQ2YWItODQzMy1lYmQyMTA4NDA0YTAiLCJwdWlkIjoiMTAwMzIwMDEzN0Y0NTI5MSIsInJoIjoiMC5BVGtBbV91VkhwUUVJRXFTS051c0tiakRQUThCSElkaFhyRlBnNnlZWVFwLWtSQTVBTTQuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiWnZnSTJ4akZBa1NPa3lMUUQtQ3FwaUZ4MXVJYTZFTE1FX19TQkpWTFJQRSIsInRpZCI6IjFlOTVmYjliLTA0OTQtNGEyMC05MjI4LWRiYWMyOWI4YzMzZCIsInVuaXF1ZV9uYW1lIjoiY2hpYnVpa2VtYUBkZWNhZ29uaHEuY29tIiwidXBuIjoiY2hpYnVpa2VtYUBkZWNhZ29uaHEuY29tIiwidXRpIjoidWNlTEdfSjdhMHlmdmJ5LXBNb3VBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.aXmxgAkBm2VM_W5sZXLDcPnewKwl63QBIz2y2pTPKLIvRVaTMruHxXlBtk_Sji8Et5_tTUTSoa-K1uxcucfY6lwe6iERlzevXBNEoHnxrEPHHkXUQntFMSi207RdG31OsjB-ULfQJnfS7giqgnsZDXqY1H4yXAprLsWzyrvjYNasou-majSjIzrfRy3v0z3K_eczF7vgK7vh3SU9NnCRiUJn2yrvYz8-a0ofRDU7CDegvsYXxhlwmZGOEgHCeUGjH6TsPWtiFmjlA0ofiaKnTrpJ7wm-AxxyMDdr_wR637aRemQ_HKZe82baQckZH7sOH8kifFsoW7D1_zX3RFYz7g"
  );
  const reportId = "3a576587-c96a-41ae-9b4c-3401e690b960";
  return (
    <div className="App">
      <header className="App-header">
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual and qna
            id: reportId,
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=3a576587-c96a-41ae-9b4c-3401e690b960&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUFGUklDQS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
            accessToken: accessToken,
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              background: models.BackgroundType.Default,
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                async function (event) {
                  //Trigger this function when the token has expired
                  if (event.detail.errorCode === "403") {
                    setAccessToken(await RefreshToken(accessToken, reportId));
                  }

                  console.log(event.detail);
                },
              ],
            ])
          }
          cssClassName={"Embed-Container"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>{" "}
    </div>
  );
}

export default App;
