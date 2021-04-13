# MediaShuttleApi.S3Storage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roleARN** | **String** | The role ARN for the AWS S3 Storage. | [optional] 
**bucket** | **String** | The name of the S3 bucket. | [optional] 
**externalId** | **String** | The unique identifier used to secure the S3 storage, as entered when creating the roleARN. | [optional] 
**serverSideEncryption** | **Boolean** | Encrypt file contents at rest in S3. | [optional] [default to false]
**filePrefix** | **String** | Prefix to prepend to files transfered to this location. Can be used to drop all files into a sub-directory. | [optional] [default to '']


