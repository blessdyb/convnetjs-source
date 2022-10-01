import React from "react";
import PropTypes from "prop-types";
import { toArray } from "lodash";
import { UX2 } from "@wsb/guac-widget-core";
import DataAidContext from "../../../common/utils/dataAidContext";
import attachmentConstants from "../../../common/constants/form/attachmentConstants";
import formIdentifiers from "../../../common/constants/form/formIdentifiers";

const { JOB_POSTING } = formIdentifiers;

const MB_MULTIPLIER = 1000000;
const KB_MULTIPLIER = 1000;
const KB = "KB";
const MB = "MB";
const MAX_ATTACHMENTS = 10;
const MAX_FILE_SIZE_LIMIT_IN_MB = 10;
const TOTAL_FILE_SIZE_LIMIT_IN_MB = 15;

const styles = {
  attachmentsWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  fileInputWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "small",
  },
  fileInputContainer: {
    display: "flex",
    alignItems: "center",
  },
  fileContainer: {
    marginBottom: "xsmall",
    display: "flex",
    flexDirection: "column",
    paddingVertical: "small",
    paddingHorizontal: "medium",
    backgroundColor: "rgba(0,0,0,.03)",
  },
  errorFileContainer: {
    display: "flex",
    paddingVertical: "small",
    paddingRight: "medium",
  },
  filenameWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  displayName: {
    maxWidth: "85%",
  },
};
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.state = {
      files: [],
      globalError: "",
      errorFiles: [],
    };
  }

  uploadFiles() {
    this.fileInput.click();
  }

  getSizeString(size) {
    const suffix = size < MB_MULTIPLIER ? KB : MB;
    if (suffix === KB) {
      return `(${Math.round((size / KB_MULTIPLIER) * 100) / 100} ${KB})`;
    }
    return `(${Math.round((size / MB_MULTIPLIER) * 100) / 100} ${MB})`;
  }

  onFilesSelected = (event) => {
    const { onFilesSelected, staticContent } = this.props;
    const processedFiles = [];
    const errorFiles = [];
    const files = event.target.files;

    if (!files || !files.length) {
      return;
    }

    const currentFiles = this.state.files.map((file) => file.file);
    const filesArray = currentFiles.concat(toArray(files));
    let totalSize = 0;
    filesArray.forEach((file) => {
      totalSize += file.size;
      if (file.size > MAX_FILE_SIZE_LIMIT_IN_MB * MB_MULTIPLIER) {
        errorFiles.push({
          hasError: true,
          error: staticContent.fileSizeLimit.replace(
            "{0}",
            `${MAX_FILE_SIZE_LIMIT_IN_MB}MB`
          ),
          file,
        });
      } else if (!attachmentConstants.supportedMimetypes.includes(file.type)) {
        errorFiles.push({
          hasError: true,
          error: staticContent.unsupportedFileType,
          file,
        });
      } else if (processedFiles.length >= MAX_ATTACHMENTS) {
        // ignore the file
        this.setState({
          globalError: staticContent.maxFileCountLimit.replace(
            "{0}",
            MAX_ATTACHMENTS
          ),
        });
      } else if (totalSize > TOTAL_FILE_SIZE_LIMIT_IN_MB * MB_MULTIPLIER) {
        errorFiles.push({
          hasError: true,
          error: staticContent.totalFileSizeLimit.replace(
            "{0}",
            `${TOTAL_FILE_SIZE_LIMIT_IN_MB}${MB}`
          ),
          file,
        });
      } else {
        processedFiles.push({
          file,
        });
      }
    });

    this.setState({ files: processedFiles, errorFiles });
    onFilesSelected && onFilesSelected(processedFiles);
  };

  renderFileInput = (DataAid) => {
    const { staticContent, attachmentsLabel, formIdentifier } = this.props;
    const { files } = this.state;

    const getTCCLString = UX2.utils.TCCLUtils.getTCCLString;
    const eid =
      formIdentifier === JOB_POSTING
        ? "ux2.job_posting.upload_file.click"
        : "ux2.contact.upload_file.click";
    const tcclString = getTCCLString({
      eid,
      type: "click",
    });

    return (
      <UX2.Element.Block style={styles.fileInputWrapper}>
        <UX2.Element.Block
          style={styles.fileInputContainer}
          data-aid={DataAid.FILE_INPUT_REND}
        >
          {files.length < MAX_ATTACHMENTS && (
            <UX2.Element.Block
              onClick={this.uploadFiles}
              data-tccl={tcclString}
            >
              <UX2.Element.Link.Icon
                tag="span"
                icon="paperclip"
                size="small"
                rotate="0"
              />
              <UX2.Element.Link tag="span">
                {attachmentsLabel || staticContent.attachFiles}
              </UX2.Element.Link>
            </UX2.Element.Block>
          )}
          {files.length >= MAX_ATTACHMENTS && (
            <UX2.Element.Block>
              <UX2.Element.Icon
                style={{ color: "grey" }}
                icon="paperclip"
                size="small"
                rotate="0"
              />
              <UX2.Element.Text disabled tag="span">
                {attachmentsLabel || staticContent.attachFiles}
              </UX2.Element.Text>
            </UX2.Element.Block>
          )}
        </UX2.Element.Block>
        <input
          multiple
          onChange={this.onFilesSelected}
          ref={(e) => {
            this.fileInput = e;
          }}
          type="file"
          accept={attachmentConstants.supportedFileTypes.join(",")}
          style={{ display: "none" }}
        />
        <UX2.Element.Details.Minor
          tag="span"
          data-aid={DataAid.ATTACHMENT_COUNT_REND}
        >
          {`${staticContent.attachments} (${files.length})`}
        </UX2.Element.Details.Minor>
      </UX2.Element.Block>
    );
  };

  removeFile = (i, hasError) => {
    const { staticContent } = this.props;
    const { files, errorFiles } = this.state;
    return () => {
      const tempFiles = hasError ? errorFiles : files;
      tempFiles.splice(i, 1);
      this.fileInput.value = null;
      const globalError =
        tempFiles.length > MAX_ATTACHMENTS
          ? staticContent.maxFileCountLimit.replace("{0}", MAX_ATTACHMENTS)
          : "";
      if (hasError) {
        this.setState({ errorFiles: tempFiles, globalError });
      } else {
        this.setState({ files: tempFiles, globalError });
      }
    };
  };

  getUploadProgress = () => {
    const { progressEvent } = this.props;
    if (progressEvent) {
      const uploaded = progressEvent.loaded;
      const total = progressEvent.total;
      return Math.round((uploaded / total) * 100);
    }
    return 0;
  };

  renderFile = (file, i, dataAid) => {
    const { section, progressEvent } = this.props;
    this.getUploadProgress(file.file);
    return (
      <UX2.Element.Block
        section={section !== "default" ? "default" : "alt"}
        style={styles.fileContainer}
      >
        <UX2.Element.Block style={styles.filenameWrapper}>
          <UX2.Element.Text
            tag="span"
            style={styles.displayName}
            data-aid={dataAid.FILE_NAME_REND}
            featured
          >
            <UX2.Element tag="span">
              {`${file.file.name} ${this.getSizeString(file.file.size)}`}
            </UX2.Element>
          </UX2.Element.Text>
          <UX2.Element.Block onClick={this.removeFile(i)}>
            <UX2.Element.Link.Icon icon="close" size="small" />
          </UX2.Element.Block>
        </UX2.Element.Block>
        {file.hasError && (
          <UX2.Element.Text alert style={{ width: "100%" }}>
            {file.error}
          </UX2.Element.Text>
        )}
        {!file.hasError && progressEvent && (
          <progress
            style={{ marginTop: "8px", width: "100%" }}
            max={100}
            value={this.getUploadProgress()}
          />
        )}
      </UX2.Element.Block>
    );
  };

  renderErrorFile = (file, i, dataAid) => {
    const { section } = this.props;
    this.getUploadProgress(file.file);
    return (
      <UX2.Element.Block
        section={section !== "default" ? "default" : "alt"}
        style={styles.errorFileContainer}
      >
        <UX2.Element.Block style={styles.filenameWrapper}>
          <UX2.Element.Block>
            <UX2.Element.Icon
              style={{ color: "red", marginRight: "xxsmall" }}
              icon="alert"
              size="medium"
              rotate="0"
            />
            <UX2.Element.Text
              tag="span"
              style={styles.displayName}
              data-aid={dataAid.FILE_NAME_REND}
              alert
            >
              <UX2.Element tag="span">
                {`${file.error}: ${file.file.name} ${this.getSizeString(
                  file.file.size
                )}`}
              </UX2.Element>
            </UX2.Element.Text>
          </UX2.Element.Block>
          <UX2.Element.Block onClick={this.removeFile(i, true)}>
            <UX2.Element.Link.Icon icon="close" size="small" />
          </UX2.Element.Block>
        </UX2.Element.Block>
      </UX2.Element.Block>
    );
  };

  renderFiles = (DataAid, showErrorFiles) => {
    const { currentFiles } = this.props;
    const { files, errorFiles } = this.state;
    const _files = showErrorFiles ? errorFiles : files;
    const hasFiles = _files.length || currentFiles.length;
    if (!hasFiles) {
      return null;
    }

    const renderFileMethod = showErrorFiles
      ? this.renderErrorFile
      : this.renderFile;
    return _files.map((file, i) => renderFileMethod(file, i, DataAid));
  };

  render() {
    const { attachmentsEnabled, staticContent } = this.props;
    const { errorFiles } = this.state;
    if (!attachmentsEnabled) {
      return null;
    }

    const { globalError } = this.state;
    return (
      <DataAidContext.Consumer>
        {(DataAid) => (
          <UX2.Element.Block style={styles.attachmentsWrapper}>
            {this.renderFileInput(DataAid)}
            {this.renderFiles(DataAid)}
            {errorFiles && errorFiles.length > 0 && (
              <UX2.Element.Block style={{ marginTop: "medium" }}>
                <UX2.Element.Text
                  featured
                  style={{ width: "100%" }}
                >{`${staticContent.couldNotAttach}:`}</UX2.Element.Text>
                {this.renderFiles(DataAid, true)}
              </UX2.Element.Block>
            )}
            {globalError && (
              <UX2.Element.Text alert>{globalError}</UX2.Element.Text>
            )}
          </UX2.Element.Block>
        )}
      </DataAidContext.Consumer>
    );
  }
}

FileInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  staticContent: PropTypes.object.isRequired,
  currentFiles: PropTypes.array,
  onFilesSelected: PropTypes.func,
  section: PropTypes.string,
  attachmentsEnabled: PropTypes.bool,
  attachmentsLabel: PropTypes.string,
  progressEvent: PropTypes.any,
  formIdentifier: PropTypes.string,
};

export default FileInput;
