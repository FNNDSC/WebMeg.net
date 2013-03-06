function fiff_define_constants() {
	FIFF.FIFFB_MEAS               = 100;
	FIFF.FIFFB_MEAS_INFO          = 101;
	FIFF.FIFFB_RAW_DATA           = 102;
	FIFF.FIFFB_PROCESSED_DATA     = 103;
	FIFF.FIFFB_CONTINUOUS_DATA    = 112;
	FIFF.FIFFB_EVOKED             = 104;
	FIFF.FIFFB_ASPECT             = 105;
	FIFF.FIFFB_SUBJECT            = 106;
	FIFF.FIFFB_ISOTRAK            = 107;
	FIFF.FIFFB_HPI_MEAS           = 108;
	FIFF.FIFFB_HPI_RESULT         = 109;
	FIFF.FIFFB_DACQ_PARS          = 117;
	FIFF.FIFFB_REF                = 118;
	FIFF.FIFFB_SMSH_RAW_DATA      = 119;
	FIFF.FIFFB_SMSH_ASPECT        = 120;
	FIFF.FIFFB_PROJ               = 313;
	FIFF.FIFFB_PROJ_ITEM          = 314;
	FIFF.FIFFB_MRI                = 200;
	FIFF.FIFFB_MRI_SET            = 201;
	FIFF.FIFFB_MRI_SLICE          = 202;
	FIFF.FIFFB_PROCESSING_HISTORY = 900;
	FIFF.FIFFB_SSS_INFO           = 502;
	FIFF.FIFFB_SSS_CAL_ADJUST     = 503;
	FIFF.FIFFB_SSS_ST_INFO        = 504;
	FIFF.FIFFB_SSS_BASES          = 505;

//	Of general interest

	FIFF.FIFF_FILE_ID         = 100;
	FIFF.FIFF_DIR_POINTER     = 101;
	FIFF.FIFF_BLOCK_ID        = 103;
	FIFF.FIFF_BLOCK_START     = 104;
	FIFF.FIFF_BLOCK_END       = 105;
	FIFF.FIFF_FREE_LIST       = 106;
	FIFF.FIFF_FREE_BLOCK      = 107;
	FIFF.FIFF_NOP             = 108;
	FIFF.FIFF_PARENT_FILE_ID  = 109;
	FIFF.FIFF_PARENT_BLOCK_ID = 110;

//	Megacq saves the parameters in these tags

	FIFF.FIFF_DACQ_PARS      = 150;
	FIFF.FIFF_DACQ_STIM      = 151;

	FIFF.FIFF_SFREQ       = 201;
	FIFF.FIFF_NCHAN       = 200;
	FIFF.FIFF_DATA_PACK   = 202;
	FIFF.FIFF_CH_INFO     = 203;
	FIFF.FIFF_MEAS_DATE   = 204;
	FIFF.FIFF_SUBJECT     = 205;
	FIFF.FIFF_COMMENT     = 206;
	FIFF.FIFF_NAVE        = 207;
	FIFF.FIFF_DIG_POINT   = 213;
	FIFF.FIFF_LOWPASS     = 219;
	FIFF.FIFF_COORD_TRANS = 222;
	FIFF.FIFF_HIGHPASS    = 223;
	FIFF.FIFF_NAME        = 233;
	FIFF.FIFF_DESCRIPTION = FIFF.FIFF_COMMENT;

//	Pointers

	FIFF.FIFFV_NEXT_SEQ    = 0;
	FIFF.FIFFV_NEXT_NONE   = -1;

//	Channel types

	FIFF.FIFFV_MEG_CH     =   1;
	FIFF.FIFFV_REF_MEG_CH = 301;
	FIFF.FIFFV_EEG_CH     =   2;
	FIFF.FIFFV_MCG_CH     = 201;
	FIFF.FIFFV_STIM_CH    =   3;
	FIFF.FIFFV_EOG_CH     = 202;
	FIFF.FIFFV_EMG_CH     = 302;
	FIFF.FIFFV_ECG_CH     = 402;
	FIFF.FIFFV_MISC_CH    = 502;
	FIFF.FIFFV_RESP_CH    = 602;             // Respiration monitoring

//	Quaternion channels for head position monitoring

	FIFF.FIFFV_QUAT_0   = 700;                 // Quaternion parameter q0; obsolete for unit quaternion
	FIFF.FIFFV_QUAT_1   = 701;                 // Quaternion parameter q1; rotation
	FIFF.FIFFV_QUAT_2   = 702;                 // Quaternion parameter q2; rotation
	FIFF.FIFFV_QUAT_3   = 703;                 // Quaternion parameter q3; rotation
	FIFF.FIFFV_QUAT_4   = 704;                 // Quaternion parameter q4; translation
	FIFF.FIFFV_QUAT_5   = 705;                 // Quaternion parameter q5; translation
	FIFF.FIFFV_QUAT_6   = 706;                 // Quaternion parameter q6; translation
	FIFF.FIFFV_HPI_G    = 707;                 // Goodness-of-fit in continuous hpi
	FIFF.FIFFV_HPI_ERR  = 708;                 // Estimation error in continuous hpi
	FIFF.FIFFV_HPI_MOV  = 709;                 // Estimated head movement speed in continuous hpi

//	Coordinate frames

	FIFF.FIFFV_COORD_UNKNOWN        = 0;
	FIFF.FIFFV_COORD_DEVICE         = 1;
	FIFF.FIFFV_COORD_ISOTRAK        = 2;
	FIFF.FIFFV_COORD_HPI            = 3;
	FIFF.FIFFV_COORD_HEAD           = 4;
	FIFF.FIFFV_COORD_MRI            = 5;
	FIFF.FIFFV_COORD_MRI_SLICE      = 6;
	FIFF.FIFFV_COORD_MRI_DISPLAY    = 7;
	FIFF.FIFFV_COORD_DICOM_DEVICE   = 8;
	FIFF.FIFFV_COORD_IMAGING_DEVICE = 9;

//	Needed for raw and evoked-response data

	FIFF.FIFF_FIRST_SAMPLE   = 208;
	FIFF.FIFF_LAST_SAMPLE    = 209;
	FIFF.FIFF_ASPECT_KIND    = 210;
	FIFF.FIFF_DATA_BUFFER    = 300;          // Buffer containing measurement data
	FIFF.FIFF_DATA_SKIP      = 301;          // Data skip in buffers
	FIFF.FIFF_EPOCH          = 302;          // Buffer containing one epoch and channel
	FIFF.FIFF_DATA_SKIP_SAMP = 303;          // Data skip in samples


//	Different aspects of data

	FIFF.FIFFV_ASPECT_AVERAGE       = 100;      // Normal average of epochs
	FIFF.FIFFV_ASPECT_STD_ERR       = 101;      // Std. error of mean
	FIFF.FIFFV_ASPECT_SINGLE        = 102;      // Single epoch cut out from the continuous data
	FIFF.FIFFV_ASPECT_SUBAVERAGE    = 103;
	FIFF.FIFFV_ASPECT_ALTAVERAGE    = 104;      // Alternating subaverage
	FIFF.FIFFV_ASPECT_SAMPLE        = 105;      // A sample cut out by graph
	FIFF.FIFFV_ASPECT_POWER_DENSITY = 106;    // Power density spectrum
	FIFF.FIFFV_ASPECT_DIPOLE_WAVE   = 200;    // Dipole amplitude curve

//	BEM surface IDs

	FIFF.FIFFV_BEM_SURF_ID_UNKNOWN    = -1;
	FIFF.FIFFV_BEM_SURF_ID_BRAIN      = 1;
	FIFF.FIFFV_BEM_SURF_ID_SKULL      = 3;
	FIFF.FIFFV_BEM_SURF_ID_HEAD       = 4;

//	More of those defined in MNE

	FIFF.FIFFV_MNE_SURF_UNKNOWN       = -1;
	FIFF.FIFFV_MNE_SURF_LEFT_HEMI     = 101;
	FIFF.FIFFV_MNE_SURF_RIGHT_HEMI    = 102;

//	These relate to the Isotrak data

	FIFF.FIFFV_POINT_CARDINAL = 1;
	FIFF.FIFFV_POINT_HPI      = 2;
	FIFF.FIFFV_POINT_EEG      = 3;
	FIFF.FIFFV_POINT_ECG      = FIFF.FIFFV_POINT_EEG;
	FIFF.FIFFV_POINT_EXTRA    = 4;

	FIFF.FIFFV_POINT_LPA = 1;
	FIFF.FIFFV_POINT_NASION = 2;
	FIFF.FIFFV_POINT_RPA = 3;

//	SSP

	FIFF.FIFF_PROJ_ITEM_KIND         = 3411;
	FIFF.FIFF_PROJ_ITEM_TIME         = 3412;
	FIFF.FIFF_PROJ_ITEM_NVEC         = 3414;
	FIFF.FIFF_PROJ_ITEM_VECTORS      = 3415;
	FIFF.FIFF_PROJ_ITEM_CH_NAME_LIST = 3417;

//	MRIs

	FIFF.FIFF_MRI_SOURCE_PATH       = 1101;
	FIFF.FIFF_MRI_SOURCE_FORMAT     = 2002;
	FIFF.FIFF_MRI_PIXEL_ENCODING    = 2003;
	FIFF.FIFF_MRI_PIXEL_DATA_OFFSET = 2004;
	FIFF.FIFF_MRI_PIXEL_SCALE       = 2005;
	FIFF.FIFF_MRI_PIXEL_DATA        = 2006;
	FIFF.FIFF_MRI_WIDTH             = 2010;
	FIFF.FIFF_MRI_WIDTH_M           = 2011;
	FIFF.FIFF_MRI_HEIGHT            = 2012;
	FIFF.FIFF_MRI_HEIGHT_M          = 2013;

	FIFF.FIFFV_MRI_PIXEL_BYTE       = 1;
	FIFF.FIFFV_MRI_PIXEL_WORD       = 2;
	FIFF.FIFFV_MRI_PIXEL_SWAP_WORD  = 3;
	FIFF.FIFFV_MRI_PIXEL_FLOAT      = 4;

//	These are the MNE fiff definitions

	FIFF.FIFFB_MNE                    = 350;
	FIFF.FIFFB_MNE_SOURCE_SPACE       = 351;
	FIFF.FIFFB_MNE_FORWARD_SOLUTION   = 352;
	FIFF.FIFFB_MNE_PARENT_MRI_FILE    = 353;
	FIFF.FIFFB_MNE_PARENT_MEAS_FILE   = 354;
	FIFF.FIFFB_MNE_COV                = 355;
	FIFF.FIFFB_MNE_INVERSE_SOLUTION   = 356;
	FIFF.FIFFB_MNE_NAMED_MATRIX       = 357;
	FIFF.FIFFB_MNE_ENV                = 358;
	FIFF.FIFFB_MNE_BAD_CHANNELS       = 359;
	FIFF.FIFFB_MNE_VERTEX_MAP         = 360;
	FIFF.FIFFB_MNE_EVENTS             = 361;
	FIFF.FIFFB_MNE_MORPH_MAP          = 362;

//	CTF compensation data

	FIFF.FIFFB_MNE_CTF_COMP           = 370;
	FIFF.FIFFB_MNE_CTF_COMP_DATA      = 371;

//	Fiff tags associated with MNE computations (3500...)


//	3500... Bookkeeping

	FIFF.FIFF_MNE_ROW_NAMES              = 3502;
	FIFF.FIFF_MNE_COL_NAMES              = 3503;
	FIFF.FIFF_MNE_NROW                   = 3504;
	FIFF.FIFF_MNE_NCOL                   = 3505;
	FIFF.FIFF_MNE_COORD_FRAME            = 3506;      // Coordinate frame employed. Defaults:
//	FIFFB_MNE_SOURCE_SPACE       FIFFV_COORD_MRI
//	FIFFB_MNE_FORWARD_SOLUTION   FIFFV_COORD_HEAD
//	FIFFB_MNE_INVERSE_SOLUTION   FIFFV_COORD_HEAD
	FIFF.FIFF_MNE_CH_NAME_LIST           = 3507;
	FIFF.FIFF_MNE_FILE_NAME              = 3508;      // This removes the collision with fiff_file.h (used to be 3501)

//	3510... 3590... Source space or surface

	FIFF.FIFF_MNE_SOURCE_SPACE_POINTS        = 3510;    // The vertices
	FIFF.FIFF_MNE_SOURCE_SPACE_NORMALS       = 3511;    // The vertex normals
	FIFF.FIFF_MNE_SOURCE_SPACE_NPOINTS       = 3512;    // How many vertices
	FIFF.FIFF_MNE_SOURCE_SPACE_SELECTION     = 3513;    // Which are selected to the source space
	FIFF.FIFF_MNE_SOURCE_SPACE_NUSE          = 3514;    // How many are in use
	FIFF.FIFF_MNE_SOURCE_SPACE_NEAREST       = 3515;    // Nearest source space vertex for all vertices
	FIFF.FIFF_MNE_SOURCE_SPACE_NEAREST_DIST  = 3516;    // Distance to the Nearest source space vertex for all vertices
	FIFF.FIFF_MNE_SOURCE_SPACE_ID            = 3517;    // Identifier
	FIFF.FIFF_MNE_SOURCE_SPACE_TYPE          = 3518;    // Surface or volume

	FIFF.FIFF_MNE_SOURCE_SPACE_NTRI          = 3590;    // Number of triangles
	FIFF.FIFF_MNE_SOURCE_SPACE_TRIANGLES     = 3591;    // The triangulation
	FIFF.FIFF_MNE_SOURCE_SPACE_NUSE_TRI      = 3592;    // Number of triangles corresponding to the number of vertices in use
	FIFF.FIFF_MNE_SOURCE_SPACE_USE_TRIANGLES = 3593;    // The triangulation of the used vertices in the source space
	FIFF.FIFF_MNE_SOURCE_SPACE_NNEIGHBORS    = 3594;     // Number of neighbors for each source space point (used for volume source spaces)
	FIFF.FIFF_MNE_SOURCE_SPACE_NEIGHBORS     = 3595;    // Neighbors for each source space point (used for volume source spaces)
	FIFF.FIFF_MNE_SOURCE_SPACE_VOXEL_DIMS    = 3596;    // Voxel space dimensions in a volume source space
	FIFF.FIFF_MNE_SOURCE_SPACE_INTERPOLATOR  = 3597;    // Matrix to interpolate a volume source space into a mri volume
	FIFF.FIFF_MNE_SOURCE_SPACE_MRI_FILE      = 3598;    // MRI file used in the interpolation

	FIFF.FIFF_MNE_SOURCE_SPACE_DIST          = 3599;    // Distances between vertices in use (along the surface)
	FIFF.FIFF_MNE_SOURCE_SPACE_DIST_LIMIT    = 3600;    // If distance is above this limit (in the volume) it has not been calculated

//	3520... Forward solution

	FIFF.FIFF_MNE_FORWARD_SOLUTION       = 3520;
	FIFF.FIFF_MNE_SOURCE_ORIENTATION     = 3521;    // Fixed or free
	FIFF.FIFF_MNE_INCLUDED_METHODS       = 3522;
	FIFF.FIFF_MNE_FORWARD_SOLUTION_GRAD  = 3523;

//	3530... Covariance matrix

	FIFF.FIFF_MNE_COV_KIND               = 3530;      // What kind of a covariance matrix
	FIFF.FIFF_MNE_COV_DIM                = 3531;      // Matrix dimension
	FIFF.FIFF_MNE_COV                    = 3532;      // Full matrix in packed representation (lower triangle)
	FIFF.FIFF_MNE_COV_DIAG               = 3533;      // Diagonal matrix
	FIFF.FIFF_MNE_COV_EIGENVALUES        = 3534;       // Eigenvalues and eigenvectors of the above
	FIFF.FIFF_MNE_COV_EIGENVECTORS       = 3535;
	FIFF.FIFF_MNE_COV_NFREE              = 3536;       // Number of degrees of freedom

//	3540... Inverse operator

//	We store the inverse operator as the eigenleads, eigenfields,
//	and weights

	FIFF.FIFF_MNE_INVERSE_LEADS              = 3540;   // The eigenleads
	FIFF.FIFF_MNE_INVERSE_LEADS_WEIGHTED     = 3546;   // The eigenleads (already weighted with R^0.5)
	FIFF.FIFF_MNE_INVERSE_FIELDS             = 3541;   // The eigenfields
	FIFF.FIFF_MNE_INVERSE_SING               = 3542;   // The singular values
	FIFF.FIFF_MNE_PRIORS_USED                = 3543;   // Which kind of priors have been used for the source covariance matrix
	FIFF.FIFF_MNE_INVERSE_FULL               = 3544;   // Inverse operator as one matrix
//	This matrix includes the whitening operator as well
//	The regularization is applied
	FIFF.FIFF_MNE_INVERSE_SOURCE_ORIENTATIONS = 3545;  // Contains the orientation of one source per row
//	The source orientations must be expressed in the coordinate system
//	given by FIFF_MNE_COORD_FRAME

//	3550... Saved environment info

	FIFF.FIFF_MNE_ENV_WORKING_DIR        = 3550;     // Working directory where the file was created
	FIFF.FIFF_MNE_ENV_COMMAND_LINE       = 3551;     // The command used to create the file

//	3560... Miscellaneous

	FIFF.FIFF_MNE_PROJ_ITEM_ACTIVE       = 3560;     // Is this projection item active?
	FIFF.FIFF_MNE_EVENT_LIST             = 3561;     // An event list (for STI 014)
	FIFF.FIFF_MNE_HEMI                   = 3562;     // Hemisphere association for general purposes

//	3570... Morphing maps

	FIFF.FIFF_MNE_MORPH_MAP              = 3570;     // Mapping of closest vertices on the sphere
	FIFF.FIFF_MNE_MORPH_MAP_FROM         = 3571;     // Which subject is this map from
	FIFF.FIFF_MNE_MORPH_MAP_TO           = 3572;     // Which subject is this map to

//	3580... CTF compensation data

	FIFF.FIFF_MNE_CTF_COMP_KIND         = 3580;     // What kind of compensation
	FIFF.FIFF_MNE_CTF_COMP_DATA         = 3581;     // The compensation data itself
	FIFF.FIFF_MNE_CTF_COMP_CALIBRATED   = 3582;     // Are the coefficients calibrated?

//	Fiff values associated with MNE computations

	FIFF.FIFFV_MNE_FIXED_ORI            = 1;
	FIFF.FIFFV_MNE_FREE_ORI             = 2;

	FIFF.FIFFV_MNE_MEG                  = 1;
	FIFF.FIFFV_MNE_EEG                  = 2;
	FIFF.FIFFV_MNE_MEG_EEG              = 3;

	FIFF.FIFFV_MNE_UNKNOWN_COV          = 0;
	FIFF.FIFFV_MNE_SENSOR_COV           = 1;
	FIFF.FIFFV_MNE_NOISE_COV            = 1;         // This is what it should have been called
	FIFF.FIFFV_MNE_SOURCE_COV           = 2;
	FIFF.FIFFV_MNE_FMRI_PRIOR_COV       = 3;
	FIFF.FIFFV_MNE_SIGNAL_COV           = 4;         // This will be potentially employed in beamformers
	FIFF.FIFFV_MNE_DEPTH_PRIOR_COV      = 5;         // The depth weighting prior
	FIFF.FIFFV_MNE_ORIENT_PRIOR_COV     = 6;     // The orientation prior

//	Source space types (values of FIFF_MNE_SOURCE_SPACE_TYPE)

	FIFF.FIFFV_MNE_SPACE_UNKNOWN  = -1;
	FIFF.FIFFV_MNE_SPACE_SURFACE  = 1;
	FIFF.FIFFV_MNE_SPACE_VOLUME   = 2;
	FIFF.FIFFV_MNE_SPACE_DISCRETE = 3;

//	Covariance matrix channel classification

	FIFF.FIFFV_MNE_COV_CH_UNKNOWN  = -1;  // No idea
	FIFF.FIFFV_MNE_COV_CH_MEG_MAG  =  0;  // Axial gradiometer or magnetometer [T]
	FIFF.FIFFV_MNE_COV_CH_MEG_GRAD =  1;  // Planar gradiometer [T/m]
	FIFF.FIFFV_MNE_COV_CH_EEG      =  2;  // EEG [V]

//	Projection item kinds

	FIFF.FIFFV_PROJ_ITEM_NONE           = 0;
	FIFF.FIFFV_PROJ_ITEM_FIELD          = 1;
	FIFF.FIFFV_PROJ_ITEM_DIP_FIX        = 2;
	FIFF.FIFFV_PROJ_ITEM_DIP_ROT        = 3;
	FIFF.FIFFV_PROJ_ITEM_HOMOG_GRAD     = 4;
	FIFF.FIFFV_PROJ_ITEM_HOMOG_FIELD    = 5;
	FIFF.FIFFV_MNE_PROJ_ITEM_EEG_AVREF  = 10;

//	Additional coordinate frames

	FIFF.FIFFV_MNE_COORD_TUFTS_EEG   =  300;         // For Tufts EEG data
	FIFF.FIFFV_MNE_COORD_CTF_DEVICE  = 1001;     // CTF device coordinates
	FIFF.FIFFV_MNE_COORD_CTF_HEAD    = 1004;         // CTF head coordinates
	FIFF.FIFFV_MNE_COORD_MRI_VOXEL   = 2001;         // The MRI voxel coordinates
	FIFF.FIFFV_MNE_COORD_RAS         = 2002;         // Surface RAS coordinates with non-zero origin
	FIFF.FIFFV_MNE_COORD_MNI_TAL     = 2003;         // MNI Talairach coordinates
	FIFF.FIFFV_MNE_COORD_FS_TAL_GTZ  = 2004;         // FreeSurfer Talairach coordinates (MNI z > 0)
	FIFF.FIFFV_MNE_COORD_FS_TAL_LTZ  = 2005;         // FreeSurfer Talairach coordinates (MNI z < 0)
	FIFF.FIFFV_MNE_COORD_FS_TAL      = 2006;         // FreeSurfer Talairach coordinates

//	CTF coil and channel types

	FIFF.FIFFV_REF_MEG_CH             = 301;

//	Data types

	FIFF.FIFFT_VOID                  = 0;
	FIFF.FIFFT_BYTE                  = 1;
	FIFF.FIFFT_SHORT                 = 2;
	FIFF.FIFFT_INT                   = 3;
	FIFF.FIFFT_FLOAT                 = 4;
	FIFF.FIFFT_DOUBLE                = 5;
	FIFF.FIFFT_JULIAN                = 6;
	FIFF.FIFFT_USHORT                = 7;
	FIFF.FIFFT_UINT                  = 8;
	FIFF.FIFFT_ULONG                 = 9;
	FIFF.FIFFT_STRING                = 10;
	FIFF.FIFFT_LONG                  = 11;
	FIFF.FIFFT_DAU_PACK13            = 13;
	FIFF.FIFFT_DAU_PACK14            = 14;
	FIFF.FIFFT_DAU_PACK16            = 16;
	FIFF.FIFFT_COMPLEX_FLOAT         = 20;
	FIFF.FIFFT_COMPLEX_DOUBLE        = 21;
	FIFF.FIFFT_OLD_PACK              = 23;
	FIFF.FIFFT_CH_INFO_STRUCT        = 30;
	FIFF.FIFFT_ID_STRUCT             = 31;
	FIFF.FIFFT_DIR_ENTRY_STRUCT      = 32;
	FIFF.FIFFT_DIG_POINT_STRUCT      = 33;
	FIFF.FIFFT_CH_POS_STRUCT         = 34;
	FIFF.FIFFT_COORD_TRANS_STRUCT    = 35;
	FIFF.FIFFT_DIG_STRING_STRUCT     = 36;
	FIFF.FIFFT_STREAM_SEGMENT_STRUCT = 37;

//	Units of measurement

	FIFF.FIFF_UNIT_NONE = -1;

//	SI base units

	FIFF.FIFF_UNIT_M   = 1;
	FIFF.FIFF_UNIT_KG  = 2;
	FIFF.FIFF_UNIT_SEC = 3;
	FIFF.FIFF_UNIT_A   = 4;
	FIFF.FIFF_UNIT_K   = 5;
	FIFF.FIFF_UNIT_MOL = 6;

//	SI Supplementary units

	FIFF.FIFF_UNIT_RAD = 7;
	FIFF.FIFF_UNIT_SR  = 8;

//	SI base candela

	FIFF.FIFF_UNIT_CD  = 9;

//	SI derived units

	FIFF.FIFF_UNIT_HZ  = 101;
	FIFF.FIFF_UNIT_N   = 102;
	FIFF.FIFF_UNIT_PA  = 103;
	FIFF.FIFF_UNIT_J   = 104;
	FIFF.FIFF_UNIT_W   = 105;
	FIFF.FIFF_UNIT_C   = 106;
	FIFF.FIFF_UNIT_V   = 107;
	FIFF.FIFF_UNIT_F   = 108;
	FIFF.FIFF_UNIT_OHM = 109;
	FIFF.FIFF_UNIT_MHO = 110;
	FIFF.FIFF_UNIT_WB  = 111;
	FIFF.FIFF_UNIT_T   = 112;
	FIFF.FIFF_UNIT_H   = 113;
	FIFF.FIFF_UNIT_CEL = 114;
	FIFF.FIFF_UNIT_LM  = 115;
	FIFF.FIFF_UNIT_LX  = 116;

//	Others we need

	FIFF.FIFF_UNIT_T_M   = 201; // T/m
	FIFF.FIFF_UNIT_AM    = 202; // Am
	FIFF.FIFF_UNIT_AM_M2 = 203; // Am/m^2
	FIFF.FIFF_UNIT_AM_M3 = 204; // Am/m^3

//	Multipliers

	FIFF.FIFF_UNITM_E    = 18;
	FIFF.FIFF_UNITM_PET  = 15;
	FIFF.FIFF_UNITM_T    = 12;
	FIFF.FIFF_UNITM_MEG  = 6;
	FIFF.FIFF_UNITM_K    = 3;
	FIFF.FIFF_UNITM_H    = 2;
	FIFF.FIFF_UNITM_DA   = 1;
	FIFF.FIFF_UNITM_NONE = 0;
	FIFF.FIFF_UNITM_D    = -1;
	FIFF.FIFF_UNITM_C    = -2;
	FIFF.FIFF_UNITM_M    = -3;
	FIFF.FIFF_UNITM_MU   = -6;
	FIFF.FIFF_UNITM_N    = -9;
	FIFF.FIFF_UNITM_P    = -12;
	FIFF.FIFF_UNITM_F    = -15;
	FIFF.FIFF_UNITM_A    = -18;
	return FIFF;
};

function fiff_dir_tree_find(tree, kind) {
	//
	// [nodes] = fiff_dir_tree_find(tree,kind)
	//
	// Find nodes of the given kind from a directory tree structure
	//

	//   Author : Matti Hamalainen, MGH Martinos Center
	//   License : BSD 3-clause
	var temp = [];
	var nodes = [];

	if (tree.block == kind) {
		nodes.push(tree);
	}
	//
	//   Search the subtrees
	//
	var index = tree.nchild - 1;
	for (var k = 0;k <= index; k++) {
		temp = fiff_dir_tree_find(tree.children[k],kind);
		if (temp.length != 0) {
			nodes.push(temp);
		}
	}

	return nodes;
}

function fiff_make_dir_tree(_scanner,dir,start,indent) {

	//	[tree, last] = fiff_make_dir_tree(_scanner,dir,start,indent)

	//	Create the directory tree structure
	//	Author : Matti Hamalainen, MGH Martinos Center
	//	License : BSD 3-clause
	var block = {};
	var tag = {};
	var FIFF_BLOCK_START     = 104;
	var FIFF_BLOCK_END       = 105;
	var FIFF_FILE_ID         = 100;
	var FIFF_BLOCK_ID        = 103;
	var FIFF_PARENT_BLOCK_ID = 110;
	
	var verbose=0;

	if (arguments.length == 2) {
		indent = 0;
		var start = 0;
	}
	else if (arguments.length == 3) {
		indent = 0;
	}
	else if (arguments.length != 4) {
		throw "Incorrect number of arguments";
	}

	if (dir.kind[start] == FIFF_BLOCK_START) {
		tag = fiff_read_tag(_scanner,dir.pos[start]);
		block = tag.data;
	}
	else {
		block = 0;
	}


	var nchild = 0;
	var this1 = start;
	var tree = {'block':block,'id':[],'parent_id':[],'nent':0,'nchild':0};
	tree.dir = {};
	tree.children = {};
	tree.dir.kind={};
	tree.dir.type = {};
	tree.dir.size={};
	tree.dir.pos={};
	tree.dir.kind[tree.nent]      = dir.kind[this1];
	tree.dir.type[tree.nent]      = dir.type[this1];
	tree.dir.size[tree.nent]      = dir.size[this1];
	tree.dir.pos[tree.nent]      = dir.pos[this1];
	
	var count = lengthObject(dir.kind);
	
	while (this1 <= count - 1) {
		if (dir.kind[this1] == FIFF_BLOCK_START) {
			if (this1 != start) {
				var combo = fiff_make_dir_tree(_scanner,dir,this1,indent+1);
				_scanner = combo[0];
				child = combo[1];
				this1 = combo[2];
				tree.children[tree.nchild] = child;
				tree.nchild = tree.nchild + 1;
			}
		}
		else if (dir.kind[this1] == FIFF_BLOCK_END) {
			tag = fiff_read_tag(_scanner,dir.pos[start]);
			if (tag.data == block) {
				break;
			}
		}	
		else {
			tree.dir.kind[tree.nent] = dir.kind[this1];
			tree.dir.type[tree.nent] = dir.type[this1];
			tree.dir.size[tree.nent] = dir.size[this1];
			tree.dir.pos[tree.nent] = dir.pos[this1];
			tree.nent = tree.nent + 1;
			//
			//  Add the id information if available
			//
			if (block == 0) {
				if (dir.kind[this1] == FIFF_FILE_ID) {
					tag = fiff_read_tag(_scanner,dir.pos[this1]);
					tree.id = tag.data;
				}
			}
			else {
				if (dir.kind[this1] == FIFF_BLOCK_ID) {
					tag = fiff_read_tag(_scanner,dir.pos[this1]);
					tree.id = tag.data;
				}
				else if (dir.kind[this1] == FIFF_PARENT_BLOCK_ID) {
					tag = fiff_read_tag(_scanner,dir.pos[this1]);
					tree.parent_id = tag.data;
				}
			}
		}
		this1 = this1 + 1;
	}

	//Eliminate the empty directory

	if (tree.nent == 0) {
		tree.dir = [];
	}

	var last = this1;

	return [_scanner,tree,last];
}

function fiff_open(_scanner) {

	//	[fid, tree, dir] = fiff_open(fname)

	//	Open a fif file and provide the directory of tags

	//	fid     the opened file id
	//	tree    tag directory organized into a tree
	//	dir     the sequential tag directory

	//	Author : Matti Hamalainen, MGH Martinos Center
	//	License : BSD 3-clause

	FIFF = fiff_define_constants();

	//	Check that this looks like a fif file

	var tag = fiff_read_tag_info(_scanner);

	if (tag.kind != FIFF.FIFF_FILE_ID) {
		alert("file does not start with a file id tag");
	}
	if (tag.type != FIFF.FIFFT_ID_STRUCT) {
		alert("file does not start with a file id tag");
	}
	if (tag.size != 20) {
		alert("file does not start with a file id tag");
	}
	tag = fiff_read_tag(_scanner); // FUNCTION HERE
	if (tag.kind != FIFF.FIFF_DIR_POINTER) {
		alert("file does have a directory pointer");
	}


	//	Read or create the directory tree

	var dirpos = tag.data;
	var dir = {};
	if (dirpos > 0) {
		tag = fiff_read_tag(_scanner,dirpos);
		dir = tag.data;
	}
	else {
		var k = 0;
		_scanner.jumpTo(0);
		dir = {'kind':{},'type':{},'size':{},'pos':{}};
		while (tag.next >= 0) {
			var pos = _scanner._dataPointer;
			tag = fiff_read_tag_info(_scanner);	
			dir.kind[k] = tag.kind;
			dir.type[k] = tag.type;
			dir.size[k] = tag.size;
			dir.pos[k]  = pos;
			k = k + 1;
		}
	}

	//	Create the directory tree structure
	var combo1 = fiff_make_dir_tree(_scanner,dir); // FUNCTION HERE
	_scanner = combo1[0];
	var child = combo1[1];
	this1 = combo1[2];

	//
	//   Back to the beginning
	//
	_scanner.jumpTo(0);
	return [_scanner,child,dir];
}

function fiff_read_meas_info(_scanner,tree) {
	//
	// [info,meas] = fiff_read_meas_info(source,tree)
	//
	// Read the measurement info
	//
	// If tree is specified, source is assumed to be an open file id,
	// otherwise a the name of the file to read. If tree is missing, the
	// meas output argument should not be specified.
	//


	//
	//   Author : Matti Hamalainen, MGH Martinos Center
	//   License : BSD 3-clause

	me='MNE:fiff_read_meas_info';

	if (arguments.length != 2 && arguments.length != 1) {
		alert("Incorrect number of arguments");
	}



	if (arguments.length == 1) {
		var combo = fiff_open(source);
		_scanner = combo[0];
		tree = combo[1];
		open_here = true;
	}
	else {
		open_here = false;
	}

	//
	//   Find the desired blocks
	//
	var combo = fiff_dir_tree_find(tree,FIFF.FIFFB_MEAS);
	var meas = combo[0][0];

	if (typeof(meas.block) == 'undefined') {
		if (open_here) {
			_scanner.close();
		}
		error(me,'Could not find measurement data');
	}
	//
	combo = fiff_dir_tree_find(meas,FIFF.FIFFB_MEAS_INFO);
	var meas_info = combo[0][0];


	if (meas_info.length == 0) {
		if (open_here) {
			_scanner.close();
		}
		alert("Could not find measurement info");
	}
	//
	//   Read measurement info
	//
	var dev_head_t=[];
	var ctf_head_t=[];
	var meas_date=[];
	var sreq, chs, nchan, lowpass, highpass;
	var p = 0;
	var chs = [];
	var index = meas_info.nent - 1;
	var kind, pos;

	for (var k = 0;k <= index;k++) {
		kind = meas_info.dir.kind[k];
		pos  = meas_info.dir.pos[k];
		switch (kind) {
		case FIFF.FIFF_NCHAN:
			tag = fiff_read_tag(_scanner,pos);
			nchan = tag.data;
			break;
		case FIFF.FIFF_SFREQ:
			tag = fiff_read_tag(_scanner,pos);
			sfreq = tag.data;
			break;
		case FIFF.FIFF_CH_INFO:
			tag = fiff_read_tag(_scanner,pos);
			chs[p] = tag.data;
			p = p+1;
			break;
		}
	}
	//
	//   Check that we have everything we need
	//

	if (typeof(nchan) == 'undefined') {
		if (open_here) {
			_scanner.close();
		}
		alert("Number of channels in not defined");
	}

	if (typeof(sfreq) == 'undefined') {
		if (open_here) {
			_scanner.close();
		}
		alert("Sampling frequetency is not defined");
	}

	if (typeof(chs) == 'undefined') {
		if (open_here) {
			_scanner.close();
		}
		alert("Channel information not defined");
	}

	if (chs.length != nchan) {
		if (open_here) {
			_scanner.close();
		}
		alert("Incorrect number of channel definitions found");
	}

	var info = {};
	info.sfreq = sfreq;
	info.nchan = nchan;
	info.chs = chs;

	return [_scanner,info,meas];
}

function fiff_read_raw_segment(_scanner,raw,from,to,sel) {
	//
	// [data,times] = fiff_read_raw_segment(raw,from,to,sel)
	//
	// Read a specific raw data segment
	//
	// raw    - structure returned by fiff_setup_read_raw
	// from   - first sample to include. If omitted, defaults to the
	//          first sample in data
	// to     - last sample to include. If omitted, defaults to the last
	//          sample in data
	// sel    - optional channel selection vector
	//
	// data   - returns the data matrix (channels x samples)
	// times  - returns the time values corresponding to the samples (optional)
	//

	//
	//   Author : Matti Hamalainen, MGH Martinos Center
	//   License : BSD 3-clause

	me='MNE:fiff_read_raw_segment';

	var sel = [];
	if (arguments.length == 4) {
		sel = [];
	}
	else if (arguments.length == 3) {
		to  = raw.last_samp;
		sel = [];
	}
	else if (arguments.length == 2) {
		from = raw.first_samp;
		to   = raw.last_samp;
		sel  = [];
	}
	else if (arguments.length != 5) {
		throw "Incorrect number of arguments";
	}
	//
	//  Initial checks
	//

	if (from < raw.first_samp) {
		from = raw.first_samp;
	}

	if (to > raw.last_samp) {
		to = raw.last_samp;
	}
	//
	if (from > to) {
		throw "No data in this1 range";
	}


	//
	//  Initialize the data and calibration vector
	//
	var nchan = raw.info.nchan;

	_scanner.jumpTo(0);

	var data = [];
	var this1 = {};
	var index = lengthObject(raw.rawdir.ent) - 1;
	var temp=[];

	for (var k = 0;k <= index;k++) {
		this1.ent = raw.rawdir.ent[k];
		tag = fiff_read_tag(_scanner,this1.ent.pos);
		//temp = Array.prototype.slice.call(tag.data);
		temp = tag.data;
		data.push(temp);
		temp=[];
	}
	return [_scanner, data];
}

function fiff_read_tag_info(_scanner) {

	//	[fid,dir] = fiff_open(fname)

	//	Open a fif file and provide the directory of tags



	//	Author : Matti Hamalainen, MGH Martinos Center
	//	License : BSD 3-clause


	var FIFFV_NEXT_SEQ=0;

	var tag = {};
	tag.kind = _scanner.scan('sint',1);
	tag.type = _scanner.scan('sint',1);
	tag.size = _scanner.scan('sint',1);
	tag.next = _scanner.scan('sint',1);


	if (tag.next == FIFFV_NEXT_SEQ) {
		var pos = _scanner._dataPointer;
		_scanner.jumpTo(tag.size + pos);
	}
	else if (tag.next > 0) {
		_scanner.jumpTo(0);
		_scanner.jumpTo(tag.next);	
	}
	return tag;
}

function fiff_read_tag(_scanner,pos) {
	//
	// [tag] = fiff_read_tag(fid,pos)
	//
	// Read one tag from a fif file.
	// if pos is not provided, reading starts from the current file position
	//

	//
	//   Author : Matti Hamalainen, MGH Martinos Center
	//   License : BSD 3-clause
	//
	//
	//   Revision 1.16  2008/11/17 15:07:00  msh
	//   Added reading of short, unsigned short, and unsigned int data
	//
	//   Revision 1.15  2008/05/07 10:39:13  msh
	//   Added FIFFT_JULIAN
	//
	//   Revision 1.14  2008/03/25 18:13:29  msh
	//   Added reading of sparse matrices
	//
	//   Revision 1.13  2006/09/24 18:52:43  msh
	//   Added FIFFV_REF_MEG_CH to fiff_define_constants.
	//   Added coord_frame field to dig point structure.
	//
	//   Revision 1.12  2006/09/23 13:31:55  msh
	//   Added reading of complex and double complex arrays and matrices
	//
	//   Revision 1.11  2006/05/03 19:03:19  msh
	//   Eliminated the use of cast function for Matlab 6.5 compatibility
	//
	//   Revision 1.10  2006/05/03 18:53:04  msh
	//   Approaching Matlab 6.5 backward compatibility
	//
	//   Revision 1.9  2006/04/26 19:50:58  msh
	//   Added fiff_read_mri
	//
	//   Revision 1.8  2006/04/23 15:29:40  msh
	//   Added MGH to the copyright
	//
	//   Revision 1.7  2006/04/17 11:52:15  msh
	//   Added coil definition stuff
	//
	//   Revision 1.6  2006/04/15 12:21:00  msh
	//   Several small improvements
	//
	//   Revision 1.5  2006/04/13 21:20:06  msh
	//   Added new routines for the channel information transformation.
	//
	//   Revision 1.4  2006/04/13 17:53:31  msh
	//   Added coordinate frame to the channel info structure
	//
	//   Revision 1.3  2006/04/13 17:49:12  msh
	//   Added some more comments
	//
	//   Revision 1.2  2006/04/13 17:47:50  msh
	//   Make coil coordinate transformation or EEG electrode location out of the channel  info.
	//
	//   Revision 1.1  2006/04/10 23:26:54  msh
	//   Added fiff reading routines
	//
	//
	FIFF = fiff_define_constants();


	if (arguments.length == 2) {
		_scanner.jumpTo(pos);
	}
	else if (arguments.length != 1) {
		throw "Incorrect number of arguments"
	}
	var tag = {'kind':{},'type':{},'size':{},'next':{},'data':{}};
	tag.kind = _scanner.scan('sint',1);
	tag.type = _scanner.scan('uint',1);
	tag.size = _scanner.scan('sint',1);
	tag.next = _scanner.scan('sint',1);
	//
	//   The magic hexadecimal values
	//
	var is_matrix           = 4294901760; // ffff0000
	var matrix_coding_dense = 16384;      // 4000
	var matrix_coding_CCS   = 16400;      // 4010
	var matrix_coding_RCS   = 16416;      // 4020
	var data_type           = 65535;      // ffff
	//
	if (tag.size > 0) {
		/*matrix_coding = is_matrix & tag.type;
		if (matrix_coding != 0) {
			matrix_coding = matrix_coding << -16;
			//
			//   Matrices
			//
			if (matrix_coding == matrix_coding_dense) {
				//
				// Find dimensions and return to the beginning of tag data
				//
				pos = _scanner._dataPointer;
				_scanner.jumpTo(pos + tag.size-4);
				ndim = _scanner.scan('uint',1);
				pos = _scanner._dataPointer;
				_scanner.jumpTo(-(ndim+1)*4 + pos);
				dims = _scanner.scan('sint',ndim);
				//
				// Back to where the data start
				//
				_scanner.jumpTo(pos);

				matrix_type = data_type & tag.type;

				if (ndim == 2) {
					switch (matrix_type) {
					case FIFF.FIFFT_INT:
						idata = _scanner.scan('sint',dims[1]*dims[2]);
						//temp = reshape(idata,dims[1],dims[2]);
						tag.data = idata;
						break;
					case FIFF.FIFFT_JULIAN:
						idata = _scanner.scan('sint',dims[1]*dims[2]);
						//temp = reshape(idata,dims[1],dims[2]);
						tag.data = idata;
						break;
					case FIFF.FIFFT_FLOAT:
						fdata = _scanner.scan('float',dims[1]*dims[2]);
						fdata = double(fdata);
						//temp = reshape(fdata,dims[1],dims[2]);
						tag.data = fdata;
						break;
					case FIFF.FIFFT_DOUBLE:
						ddata = _scanner.getFloat64(dims[1]*dims[2]);
						temp = reshape(ddata,dims(1),dims(2));
						tag.data = temp;
						break;
						case FIFF.FIFFT_COMPLEX_FLOAT:
                        fdata = fread(fid,2*dims(1)*dims(2),'single=>double');
                        nel = length(fdata);
                        fdata = complex(fdata(1:2:nel),fdata(2:2:nel));
                        //
                        //   Note: we need the non-conjugate transpose here
                        //
                        tag.data = transpose(reshape(fdata,dims(1),dims(2)));
                    case FIFF.FIFFT_COMPLEX_DOUBLE
                        ddata = fread(fid,2*dims(1)*dims(2),'double=>double');
                        nel = length(ddata);
                        ddata = complex(ddata(1:2:nel),ddata(2:2:nel));
                        //
                        //   Note: we need the non-conjugate transpose here
                        //
                        tag.data = transpose(reshape(ddata,dims(1),dims(2)));
					default:
						throw "Cannot handle this particular 2D matrix";
					}
				}
				else if (ndim == 3) {
                switch (matrix_type):
                    case FIFF.FIFFT_INT:
                        idata = _scanner.getInt32(dims[1]*dims[2]*dims[3]);
                        tag.data = reshape(idata,dims(1),dims(2),dims(3));
                    case FIFF.FIFFT_JULIAN
                        idata = fread(fid,dims(1)*dims(2)*dims(3),'int32=>int32');
                        tag.data = reshape(idata,dims(1),dims(2),dims(3));
                    case FIFF.FIFFT_FLOAT
                        fdata = fread(fid,dims(1)*dims(2)*dims(3),'single=>double');
                        tag.data = reshape(fdata,dims(1),dims(2),dims(3));
                    case FIFF.FIFFT_DOUBLE
                        ddata = fread(fid,dims(1)*dims(2)*dims(3),'double=>double');
                        tag.data = reshape(ddata,dims(1),dims(2),dims(3));
                    case FIFF.FIFFT_COMPLEX_FLOAT
                        fdata = fread(fid,2*dims(1)*dims(2)*dims(3),'single=>double');
                        nel = length(fdata);
                        fdata = complex(fdata(1:2:nel),fdata(2:2:nel));
                        tag.data = reshape(fdata,dims(1),dims(2),dims(3));
                    case FIFF.FIFFT_COMPLEX_DOUBLE
                        ddata = fread(fid,2*dims(1)*dims(2)*dims(3),'double=>double');
                        nel = length(ddata);
                        ddata = complex(ddata(1:2:nel),ddata(2:2:nel));
                        tag.data = reshape(ddata,dims(1),dims(2),dims(3));
                    otherwise
                        error(me,'Cannot handle a 3D matrix of type //d yet',matrix_type)
                end
                //
                //   Permute
                //
                tag.data = permute(tag.data,[ 3 2 1 ]);
				else {
					throw "Only two dimensional matrices are supported at this time"
				}
			}
			else if (matrix_coding == matrix_coding_CCS || matrix_coding == matrix_coding_RCS) {
					            //
            // Find dimensions and return to the beginning of tag data
            //
            pos = _scanner.tell();
            _scanner.seek(pos + tag.size-4);
            ndim = _scanner.getInt32(1);
            pos = _scanner.tell();
            _scanner.seek(pos -(ndim+2)*4);
            dims = _scanner.getInt32(ndim+1);
            if (ndim != 2) {
                throw "Only two-dimensional matrices are supported at this time"
            }
            //
            // Back to where the data start
            //
            _scanner.seek(pos);
            nnz   = dims[1];
            nrow  = dims[2];
            ncol  = dims[3];
            sparse_data = zeros(nnz,3);
            sparse_data(:,3) = fread(fid,nnz,'single=>double');
            if (matrix_coding == matrix_coding_CCS)
                //
                //    CCS
                //
                sparse_data(:,1)  = fread(fid,nnz,'int32=>double') + 1;
                ptrs  = fread(fid,ncol+1,'int32=>double') + 1;
                p = 1;
                for j = 1:ncol
                    while p < ptrs(j+1)
                        sparse_data(p,2) = j;
                        p = p + 1;
                    end
                end
            else
                //
                //    RCS
                //
                sparse_data(:,2)  = fread(fid,nnz,'int32=>double') + 1;
                ptrs  = fread(fid,nrow+1,'int32=>double') + 1;
                p = 1;
                for j = 1:nrow
                    while p < ptrs(j+1)
                        sparse_data(p,1) = j;
                        p = p + 1;
                    end
                end
            end
            tag.data = spconvert(sparse_data);
            tag.data(nrow,ncol) = 0.0;
			}
			else {
				throw "Cannot handle other than dense or sparse matrices yet";     
			}
		}
			else {*/
		//
		//   All other data types
		//
		switch (tag.type) {
		//
		//   Simple types
		//
		case FIFF.FIFFT_BYTE:
			tag.data = _scanner.scan(tag.size);
			break;
		case FIFF.FIFFT_SHORT:
			tag.data = _scanner.scan('sshort',tag.size/2);
			break;
		case FIFF.FIFFT_INT:
			tag.data = _scanner.scan('sint',tag.size/4);
			break;
		case FIFF.FIFFT_USHORT:
			tag.data = _scanner.scan('ushort',tag.size/2);
			break;
		case FIFF.FIFFT_UINT:
			tag.data = _scanner.scan('uint',tag.size/4);
			break;
		case FIFF.FIFFT_FLOAT:
			temp = _scanner.scan('float',tag.size/4);
			tag.data = temp;
			break;
		case FIFF.FIFFT_DOUBLE:
			tag.data = _scanner.scan('float64',tag.size/8);
			break;
		case FIFF.FIFFT_STRING:
			temp = _scanner.scan('uchar',tag.size);
			tag.data = temp.transpose();
			break;
		case FIFF.FIFFT_DAU_PACK16:
			tag.data = _scanner.scan('sshort',tag.size/2);
			break;
			/*case FIFF.FIFFT_COMPLEX_FLOAT
                tag.data = fread(fid,tag.size/4,'single=>double');
                nel = length(tag.data);
                tag.data = complex(tag.data(1:2:nel),tag.data(2:2:nel));
            case FIFF.FIFFT_COMPLEX_DOUBLE
                tag.data = fread(fid,tag.size/8,'double');
                nel = length(tag.data);
                tag.data = complex(tag.data(1:2:nel),tag.data(2:2:nel));
                //
                //   Structures
                //
			 */            case FIFF.FIFFT_ID_STRUCT:
				 tag.data.version = _scanner.scan('sint',1);
				 tag.data.machid  = _scanner.scan('sint',2);
				 tag.data.secs    = _scanner.scan('sint',1);
				 tag.data.usecs   = _scanner.scan('sint',1);
				 break;
			 case FIFF.FIFFT_DIG_POINT_STRUCT:
				 tag.data.kind    = _scanner.scan('sint',1);
				 tag.data.ident   = _scanner.scan('sint',1);
				 tag.data.r       = _scanner.scan('float',3);
				 tag.data.coord_frame = 0;
				 break;
			 case FIFF.FIFFT_COORD_TRANS_STRUCT:
				 tag.data.from = _scanner.scan('sint',1);
				 tag.data.to   = _scanner.scan('sint',1);
				 trans  = _scanner.scan('float',12);
				 /*rot = double(temp);
						 rot = reshape(rot,3,3);          
						 temp = _scanner.getFloat32(3);
						 move = double(temp);
						 rot.push(move);
						 rot = rot.transpose();
						 rot = rot.push([0,0,0,1]);*/
				 tag.data.trans = trans;
				 //
				 // Skip over the inverse transformation
				 // It is easier to just use inverse of trans in Matlab
				 //
				 pos = _scanner._dataPointer;
				 _scanner.jumpTo(12*4 + pos);
				 break;
			 case FIFF.FIFFT_CH_INFO_STRUCT:
				 tag.data.scanno    = _scanner.scan('sint',1);
				 tag.data.logno     = _scanner.scan('sint',1);
				 tag.data.kind      = _scanner.scan('sint',1);
				 temp = _scanner.scan('float',1);
				 tag.data.range = temp;
				 temp       = _scanner.scan('float',1);
				 tag.data.cal = temp;
				 tag.data.coil_type = _scanner.scan('sint',1);
				 //
				 //   Read the coil coordinate system definition
				 //
				 temp        = _scanner.scan('float',12);
				 tag.data.loc = temp;
				 tag.data.coil_trans  = [];
				 tag.data.eeg_loc     = [];
				 tag.data.coord_frame = FIFF.FIFFV_COORD_UNKNOWN;
				 //
				 //   Convert loc into a more useful format
				 //
				 loc = tag.data.loc;
				 if (tag.data.kind == FIFF.FIFFV_MEG_CH || tag.data.kind == FIFF.FIFFV_REF_MEG_CH) {
					 tag.data.coil_trans = loc;
					 /*					 tag.data.coil_trans[0][0] = loc[3];
					 tag.data.coil_trans[1][0] = loc[4];
					 tag.data.coil_trans[2][0] = loc[5];
					 tag.data.coil_trans[3][0] = 0;
					 tag.data.coil_trans[0][1] = loc[6];
					 tag.data.coil_trans[1][1] = loc[7];
					 tag.data.coil_trans[2][1] = loc[8];
					 tag.data.coil_trans[3][1] = 0;
					 tag.data.coil_trans[0][2] = loc[9];
					 tag.data.coil_trans[1][2] = loc[10];
					 tag.data.coil_trans[2][2] = loc[11];
					 tag.data.coil_trans[3][2] = 0;
					 tag.data.coil_trans[0][3] = loc[0];
					 tag.data.coil_trans[1][3] = loc[1];
					 tag.data.coil_trans[2][3] = loc[2];
					 tag.data.coil_trans[3][3] = 1;*/
					 tag.data.coord_frame = FIFF.FIFFV_COORD_DEVICE;
				 }
				 else if (tag.data.kind == FIFF.FIFFV_EEG_CH) { 
					 if (loc[3]* loc[3] + loc[4]*loc[4] + loc[5]*loc[5] > 0) { // CHANGE HERE
						 tag.data.eeg_loc = loc;
						 /*						 tag.data.eeg_loc[0][0]     = loc[0]; 
						 tag.data.eeg_loc[1][0]     = loc[1];
						 tag.data.eeg_loc[2][0]     = loc[2];
						 tag.data.eeg_loc[0][1]     = loc[3];
						 tag.data.eeg_loc[1][1]     = loc[4];
						 tag.data.eeg_loc[2][1]     = loc[5];*/
					 }
					 else {
						 tag.data.eeg_loc = loc;
						 /*						 tag.data.eeg_loc[0][0] = loc[0];
						 tag.data.eeg_loc[0][1] = loc[1];
						 tag.data.eeg_loc[0][2] = loc[2];*/
					 }
					 tag.data.coord_frame = FIFF.FIFFV_COORD_HEAD;
				 }
				 //
				 //   Unit and exponent
				 //
				 tag.data.unit     = _scanner.scan('sint',1);
				 tag.data.unit_mul = _scanner.scan('sint',1);
				 //
				 //   Handle the channel name
				 //
				 ch_name   = _scanner.scan('uchar',16);

				 //
				 // Omit nulls
				 //
				 len = 16;
				 var temp1 = [];
				 for (k = 0;k < 15;k++) {
					 if (ch_name[k] == 0) {
						 len = k-1;
						 break;
					 }
					 else {
						 temp1 = temp1 + String.fromCharCode(ch_name[k]);
					 }
				 }
				 tag.data.ch_name = temp1;
				 break;
				 /*            case FIFF.FIFFT_OLD_PACK:
                offset   = fread(fid,1,'single=>double');
                scale    = fread(fid,1,'single=>double');
                tag.data = fread(fid,(tag.size-8)/2,'int16=>short');
                tag.data = scale*single(tag.data) + offset;
                */
            case FIFF.FIFFT_DIR_ENTRY_STRUCT:
                tag.data = {'kind':{},'type':{},'size':{},'pos':{}};
                for (var k = 0;k < tag.size/16-1;k++) {
                    kind = _scanner.scan('sint',1);
                    type = _scanner.scan('uint',1);
                    tagsize = _scanner.scan('sint',1);
                    pos  = _scanner.scan('sint',1);
                    tag.data.kind[k] = kind;
                    tag.data.type[k] = type;
                    tag.data.size[k] = tagsize;
                    tag.data.pos[k]  = pos;
                }
                break;

			 default:
				 alert("Unimplemented tag data type");
		}
	}


	if (tag.next != FIFF.FIFFV_NEXT_SEQ) {
		_scanner.jumpTo(tag.next);
	}
	return tag;
}

function fiff_setup_read_raw(_scanner) {
	//
	// [data] = fiff_setup_read_raw(fname,allow_maxshield)
	//
	// Read information about raw data file
	//
	// fname               Name of the file to read
	// allow_maxshield     Accept unprocessed MaxShield data
	//

	//
	//   Author : Matti Hamalainen, MGH Martinos Center
	//   License : BSD 3-clause
	var combo = fiff_open(_scanner); // FUNCTION HERE
	var _scanner = combo[0];
	var tree = combo[1]; 
	//
	//   Read the measurement info
	//
	combo = fiff_read_meas_info(_scanner,tree); // FUNCTION HERE
	var info = combo[1];
	var meas = combo[2];
	//
	//   Locate the data of interest
	//
	var raw = fiff_dir_tree_find(meas,FIFF.FIFFB_RAW_DATA);
	if (raw.length != 0) {
		raw = raw[0][0];	

	}
	
	if (raw.length == 0) {
		raw = fiff_dir_tree_find(meas,FIFF.FIFFB_CONTINUOUS_DATA);
		raw = raw[0][0];
		raw = raw[0];
		if (raw.length == 0) {
			alert("No raw data");
		}
	}

	//
	//   Set up the output structure
	//
	var data = {};
	data.info       = info;
	data.first_samp = 0;
	data.last_samp  = 0;
	//
	//   Process the directory
	//
	var dir          = raw.dir;
	var nent         = raw.nent;
	var nchan        = info.nchan;
	var first        = 0;
	var first_samp   = 0;
	var first_skip   = 0;
	//
	//  Get first sample tag if it is there
	//
	if (dir.kind[first] == FIFF.FIFF_FIRST_SAMPLE) {
		tag = fiff_read_tag(_scanner,dir.pos[first]); // FUNCTION HERE
		first_samp = tag.data;
		first = first + 1;
	}
	//
	//  Omit initial skip
	//
	if (dir.kind[first] == FIFF.FIFF_DATA_SKIP) {
		//
		//  This first skip can be applied only after we know the buffer size
		//
		tag = fiff_read_tag(_scanner,dir.pos[first]);
		first_skip = tag.data;
		first = first + 1;
	}
	data.first_samp = first_samp;
	//
	//   Go through the remaining tags in the directory
	//
	var rawdir = {'ent':{},'first':{},'last':{},'nsamp':{}};
	var nskip = 0;
	var ndir  = 0;
	var index = nent - 1;
	for (k = first;k <= index;k++) {
		var ent = {};
		ent.kind = dir.kind[k];
		ent.pos = dir.pos[k];
		ent.size = dir.size[k];
		ent.type = dir.type[k];
		if (ent.kind == FIFF.FIFF_DATA_SKIP) {
			tag = fiff_read_tag(_scanner,ent.pos);
			nskip = tag.data;
		}
		else if (ent.kind == FIFF.FIFF_DATA_BUFFER) {
			//
			//   Figure out the number of samples in this buffer
			//
			switch (ent.type) {
			case FIFF.FIFFT_DAU_PACK16:
				nsamp = ent.size/(2*nchan);
				break;
			case FIFF.FIFFT_SHORT:
				nsamp = ent.size/(2*nchan);
				break;
			case FIFF.FIFFT_FLOAT:
				nsamp = ent.size/(4*nchan);
				break;
			case FIFF.FIFFT_INT:
				nsamp = ent.size/(4*nchan);
				break;
			default:
				_scanner.close(); //CHANGE HERE
				alert("Cannot handle data buffers");
			}
			//
			//  Do we have an initial skip pending?
			//
			if (first_skip > 0) {
				first_samp = first_samp + nsamp*first_skip;
				data.first_samp = first_samp;
				first_skip = 0;
			}
			//
			//  Do we have a skip pending?
			//
			if (nskip > 0) {
				ndir = ndir+1;
				rawdir.ent[ndir]   = [];
				rawdir.first[ndir] = first_samp;
				rawdir.last[ndir]  = first_samp + nskip*nsamp - 1;
				rawdir.nsamp[ndir] = nskip*nsamp;
				first_samp = first_samp + nskip*nsamp;
				nskip = 0;
			}
			//
			//  Add a data buffer
			//

			rawdir.ent[ndir]   = ent;
			rawdir.first[ndir] = first_samp;
			rawdir.last[ndir]  = first_samp + nsamp - 1;
			rawdir.nsamp[ndir] = nsamp;
			ndir               = ndir+1;
			first_samp = first_samp + nsamp;
		}
	}
	data.last_samp  = first_samp - 1;
	//
	//   Add the calibration factors
	//
	var cals = new Array(data.info.nchan);
	var index1 = data.info.chan  - 1;
	for (var k = 0;k < index1;k++) {
		cals[k] = data.info.chs[k].range*data.info.chs[k].cal;
	}
	//
	data.cals       = cals;
	data.rawdir     = rawdir;
	data.proj       = [];
	data.comp       = [];

	return data;
}

function find_tag(node,findkind) {
	var index = node.nent - 1;
	var kind, pos;

	for (var p = 0;p < index;p++) {
		kind = node.dir(p).kind;
		pos  = node.dir(p).pos;
		if (kind == findkind) {
			tag = fiff_read_tag(fid,pos);
			return tag;
		}
	}
	tag = [];
	return tag;
}






