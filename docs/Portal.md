# MediaShuttleApi.Portal

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier representing a portal. | [optional] 
**name** | **String** | The portal name. | [optional] [default to 'Share Portal n']
**url** | **String** | The access URL for the portal. The URL prefix cannot exceed 63 characters, must contain only alphanumeric characters and cannot start or end with a dash (-) and must end in \".mediashuttle.com\". | [optional] [default to 'random.mediashuttle.com']
**type** | **String** | Media Shuttle portal type. | [optional] [default to 'share']
**createdOn** | **Date** | The date of portal creation. | [optional] 
**lastModifiedOn** | **Date** | The date the portal was last modified. | [optional] 
**authentication** | **Object** | The authentication schemes for the portal, where a Share portal cannot be unauthenticated. | [optional] 
**linkAuthentication** | **Object** | The authentication options for download, upload, and token based links. Only applicable when portal authentication is enabled. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `send` (value: `"send"`)

* `share` (value: `"share"`)

* `submit` (value: `"submit"`)




