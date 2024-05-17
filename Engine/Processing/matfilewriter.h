
#ifndef MATFILEWRITER_H
#define MATFILEWRITER_H

#include <QString>
#include <vector>

using namespace std;

enum StorageDataType {
    StorageDataTypeInvalid = 0,
    StorageDataTypeInt8 = 1,
    StorageDataTypeUInt8 = 2,
    StorageDataTypeInt16 = 3,
    StorageDataTypeUInt16 = 4,
    StorageDataTypeInt32 = 5,
    StorageDataTypeUInt32 = 6,
    StorageDataTypeSingle = 7,
    StorageDataTypeDouble = 9,
    StorageDataTypeInt64 = 12,
    StorageDataTypeUInt64 = 13,
    StorageDataTypeMatrix = 14,
    StorageDataTypeCompressed = 15,
    StorageDataTypeUtf8 = 16,
    StorageDataTypeUtf16 = 17,
    StorageDataTypeUtf32 = 18
};

enum MatlabDataType {
    MatlabDataTypeInvalid = 0,
    MatlabDataTypeCell = 1,
    MatlabDataTypeStructure = 2,
    MatlabDataTypeObject = 3,
    MatlabDataTypeChar = 4,
    MatlabDataTypeSparse = 5,
    MatlabDataTypeDouble = 6,
    MatlabDataTypeSingle = 7,
    MatlabDataTypeInt8 = 8,
    MatlabDataTypeUInt8 = 9,
    MatlabDataTypeInt16 = 10,
    MatlabDataTypeUInt16 = 11,
    MatlabDataTypeInt32 = 12,
    MatlabDataTypeUInt32 = 13,
    MatlabDataTypeInt64 = 14,
    MatlabDataTypeUInt64 = 15
};

class MatFileElement
{
public:
    MatFileElement(const QString& name_);
    virtual ~MatFileElement();
    virtual void writeElement(QDataStream& outStream) = 0;
    virtual void setTransposed(bool) {}
    static int sizeOfDataTypeInBytes(StorageDataType dataType);
    static int numPaddingBytes(int numDataBytes);
    static void writePaddingBytes(QDataStream& outStream, int numDataBytes);
    static StorageDataType correspondingStorageDataType(MatlabDataType dataType);
    static MatlabDataType correspondingMatlabDataType(StorageDataType dataType);
    static StorageDataType smallestCompressedStorageDataType(int64_t minValue, int64_t maxValue);

protected:
    QString name;
};


class MatFileNumericArray : public MatFileElement
{
public:
    MatFileNumericArray(const QString& name_, int rows_, int columns_, MatlabDataType matlabArrayType_ = MatlabDataTypeInt32);
    void setTransposed(bool transpose_) override { transpose = transpose_; }
    void writeDataElementInfo(QDataStream& outStream) const;
    virtual void writeElement(QDataStream& outStream) override = 0;

protected:
    int rows;
    int columns;
    bool transpose;
    StorageDataType storageDataType;
    MatlabDataType matlabDataType;

    int sizeOfArrayDataInBytes() const;
};


class MatFileSparseArray : public MatFileElement
{
public:
    MatFileSparseArray(const QString& name_, int rows_, int columns_);
    void setTransposed(bool transpose_) override { transpose = transpose_; }
    void writeDataElementInfo(QDataStream& outStream) const;
    virtual void writeElement(QDataStream& outStream) override = 0;

protected:
    int rows;
    int columns;
    bool transpose;
    StorageDataType storageDataType;
    int numNonZeroElements;
    vector<vector<int32_t> > dataArray;

    int sizeOfArrayDataInBytes() const;
};

class MatFileUInt8SparseArray : public MatFileSparseArray
{
public:
    MatFileUInt8SparseArray(const QString& name_, const vector<vector<uint8_t> >& dataArray_);
    void writeElement(QDataStream& outStream) override;
};

class MatFileIntegerScalar : public MatFileNumericArray
{
public:
    MatFileIntegerScalar(const QString& name_, int64_t dataValue_, MatlabDataType matlabDataType_ = MatlabDataTypeInt32);
    void writeElement(QDataStream& outStream) override;

private:
    int64_t dataValue;
};


class MatFileRealScalar : public MatFileNumericArray
{
public:
    MatFileRealScalar(const QString& name_, double dataValue_, MatlabDataType matlabDataType_ = MatlabDataTypeDouble);
    void writeElement(QDataStream& outStream) override;

private:
    double dataValue;
};

class MatFileString : public MatFileNumericArray
{
public:
    MatFileString(const QString& name_, const QString& text_);
    void writeElement(QDataStream& outStream) override;

private:
    QString text;
};

class MatFileUInt8Vector : public MatFileNumericArray
{
public:
    MatFileUInt8Vector(const QString& name_, const vector<uint8_t>& dataVector_, MatlabDataType matlabDataType_ = MatlabDataTypeUInt8);
    void writeElement(QDataStream& outStream) override;

private:
    vector<uint8_t> dataVector;
};

class MatFileUInt16Vector : public MatFileNumericArray
{
public:
    MatFileUInt16Vector(const QString& name_, const vector<uint16_t>& dataVector_, MatlabDataType matlabDataType_ = MatlabDataTypeUInt16);
    void writeElement(QDataStream& outStream) override;

private:
    vector<uint16_t> dataVector;
};

class MatFileInt16Vector : public MatFileNumericArray
{
public:
    MatFileInt16Vector(const QString& name_, const vector<int16_t>& dataVector_, MatlabDataType matlabDataType_ = MatlabDataTypeInt16);
    void writeElement(QDataStream& outStream) override;

private:
    vector<int16_t> dataVector;
};

class MatFileInt32Vector : public MatFileNumericArray
{
public:
    MatFileInt32Vector(const QString& name_, const vector<int32_t>& dataVector_, MatlabDataType matlabDataType_ = MatlabDataTypeInt32);
    void writeElement(QDataStream& outStream) override;

private:
    vector<int32_t> dataVector;
};

class MatFileRealVector : public MatFileNumericArray
{
public:
    MatFileRealVector(const QString& name_, const vector<float> &dataVector_, MatlabDataType matlabDataType_ = MatlabDataTypeDouble);
    void writeElement(QDataStream& outStream) override;

private:
    vector<float> dataVector;
};

class MatFileRealArray : public MatFileNumericArray
{
public:
    MatFileRealArray(const QString& name_, const vector<vector<float> >& dataArray_, MatlabDataType matlabDataType_ = MatlabDataTypeDouble);
    void writeElement(QDataStream& outStream) override;

private:
    vector<vector<float> > dataArray;
};


class MatFileWriter
{
public:
    MatFileWriter();
    ~MatFileWriter();

    int addIntegerScalar(const QString& name_, int64_t dataValue_, MatlabDataType matlabDataType_ = MatlabDataTypeInt32);
    int addRealScalar(const QString& name_, double dataValue_, MatlabDataType matlabDataType_ = MatlabDataTypeDouble);
    int addString(const QString& name_, const QString& text_);
    int addUInt8Vector(const QString& name_, const vector<uint8_t>& dataVector_, MatlabDataType matlabDataType_ = MatlabDataTypeUInt8);
    int addUInt16Vector(const QString& name_, const vector<uint16_t>& dataVector_, MatlabDataType matlabDataType_ = MatlabDataTypeUInt16);
    int addInt16Vector(const QString& name_, const vector<int16_t>& dataVector_, MatlabDataType matlabDataType_ = MatlabDataTypeInt16);
    int addInt32Vector(const QString& name_, const vector<int32_t>& dataVector_, MatlabDataType matlabDataType_ = MatlabDataTypeInt32);
    int addRealVector(const QString& name_, const vector<float>& dataVector_, MatlabDataType matlabDataType_ = MatlabDataTypeDouble);
    int addRealArray(const QString& name_, const vector<vector<float> >& dataArray_, MatlabDataType matlabDataType_ = MatlabDataTypeDouble);
    int addUInt8SparseArray(const QString& name_, const vector<vector<uint8_t> >& dataArray_);
    void transposeLastElement();
    void removeAllElements();
    bool writeFile(QString fileName);

private:
    vector<MatFileElement*> elements;

    int addElement(MatFileElement* element);
    void writeHeader(QDataStream &outStream) const;
};

#endif // MATFILEWRITER_H
