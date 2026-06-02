At its core, the Model Context Protocol allows an LLM to request help from external tools to answer a query or complete a task. Imagine you ask an AI assistant: "Find the latest sales report in our database and email it to my manager."

Here is a simplified look at how MCP would handle this:

1. **Request and tool discovery:** The LLM understands it cannot access a database or send emails on its own. It uses the MCP client to search for available tools, where it finds two relevant tools registered on MCP servers: a database_query tool and an email_sender tool.
2. **Tool invocation:** The LLM generates a structured request to use these tools. First, it calls the database_query tool, specifying the report name. The MCP client then sends this request to the appropriate MCP server.
3. **External action and data return:** The MCP server receives the request, translates it into a secure SQL query for the company's database, and retrieves the sales report. It then formats this data and sends it back to the LLM.
4. **Second action and response generation:** Now equipped with the report data, the LLM calls the email_sender tool, providing the manager's email address and the report content. After the email is sent, the MCP server confirms the action was completed.
5. **Final confirmation:** The LLM provides a final response to you: "I have found the latest sales report and emailed it to your manager."


__Note__ : LLM is restricted to only specific tasks which are hard coded inside MCP server, So it has limited permission without giving it full access

Kali MCP server is useful for solving CTF's and labs