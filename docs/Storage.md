# MediaShuttleApi.Storage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier for the remote storage. | [optional] 
**type** | **String** | The type of remote storage: local, s3, or azure. | [optional] 
**status** | **String** | The status of the storage location. The options are: available, unavailable, or suspended. | [optional] 
**relays** | **[String]** | The list of relay addresses set for transfers with the Storage Server. | [optional] 
**configuration** | **Object** | A configuration object based on the storage type. The options are: LocalStorage, S3Storage, or AzureBlobStorage. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `local` (value: `"local"`)

* `s3` (value: `"s3"`)

* `azure` (value: `"azure"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `available` (value: `"available"`)

* `unavailable` (value: `"unavailable"`)

* `suspended` (value: `"suspended"`)




