Workflow save.
Genrate bot/ Test bot.
Mark bot is deployed.
Bot version.

## Save workflow

```
   [POST] /workflow/update/:botId/:workflowId
```

This method is used to update the workflow document.

-   In request body we will get nodes, edges, variables and etc.
-   Here we are not validating any parameters because we are assuming this request will not be used by any other system.
-   We count all the validation errors in that workflow and set this count in botVersion field in bot document.
-   This data is saved to "Workflows" collection.

## Genrate bot / Test bot.

```
    [POST] /workflow/deploy-bot/:botId/:workflowId
```
This method is used to update the workflow document.

-   In request body we will get nodes, edges, variables and etc.
-   Here we are not validating any parameters because we are assuming this request will not be used by any other system.
-   We count all the validation errors in that workflow and set this count in botVersion field in bot document.
-   This data is saved to "Workflows" collection.
