# Export report data in a xlsx file format



{% swagger method="get" path="" baseUrl="/analytics/reports/{uuid}/export/xlsx" summary="Export report data in a xlsx file format." %}
{% swagger-description %}
Returns a .xlsx file
{% endswagger-description %}

{% swagger-parameter in="path" name="uuid" type="String" required="true" %}
Report Identifier
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Successful Operation" %}
```
content:
            application/json:
              schema:
                type: string
                format: binary
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="Internal Server Error" %}
```
 content:
            application/json:
              schema:
                "$ref": "#/components/schemas/InternalServerErrorDTO"
```
{% endswagger-response %}
{% endswagger %}
