# MediaShuttleApi.PortalFolder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **String** | The case-sensitive path to the folder relative to the storage repository path.  For example, if you are using local storage your full path is composed of 2 parts: * The repositoryPath (e.g. /example/repository/path) * The path here (e.g. /user/portal/folder)  In the example above the resolved path on the file system would be '/example/repository/path/user/portal/folder'. You should *not* provide the absolute path in the file system here as input, only paths relative to the repositoryPath will function.  The following paths are forbidden:  * Paths that contain .. * Paths that resolve to the same path as another folder. * Paths that represent a subfolder of another path.  This path is *not* verified against the relevant storage, all paths will be accepted but non-existant paths will return no results.  Finally to provide a consistent path presentation this API will normalize any paths provided. So a path like \\my\\.\\example\\path will become /my/example/path  | [optional] 
**userHome** | **Boolean** | This folder represents the home folder of the user. All other folders are considered linked folders. When modifying folder permissions exactly one folder must be marked as userHome. Omitted userHome properties are assumed to be false. | [optional] 
**canUpload** | **Boolean** | The user can upload content to this folder | [optional] 
**canDownload** | **Boolean** | The user can download content from this folder | [optional] 
**canDoFileOperations** | **Boolean** | The user can perform file operations on content in this folder | [optional] 


