import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
    name: "demo-server",
    version: "1.0.0"
});

server.tool("x-post", { title: z.string() }, ({ title }) => {
    try {

    } catch (error) {
        console.log(error)
    }
})
// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);

// tool1 search on internet
// tool2 edit file

